(ns ^:figwheel-always om-tut.core
    (:require
      [om.core :as om :include-macros true]
      [om.dom :as dom :include-macros true]
      [cemerick.pprng :as rng]
      [goog.string :as gstring]
      [goog.string.format]))

;; DONE: Correct resizing behaviour
;; DONE: Fix model - use random on model change, but not view.
;; DONE: Fix model - letters should be individual om components so that it doesn't need to rerender the whole thing!
;; DONE: Tab-stop
;; DONE: Print view
;; DONE: Fix retarted y x flip in coords.
;; DONE: Cleaner movement around code
;; DONE: Page end ding
;; DONE: Exporting options.


;; == Above are blockers prior to publish ==

;; TODO: Backspace tabstop sound
;; TODO: Font sizes.
;; TODO: Keyboard hints around the place.
;; TODO: Move page with mouse drag.

;; TODO: Red-letter mode

;; TODO: Controls - Page size, line spacing
;; TODO: Animation would be nice..
;; TODO: Multi-page mode?
;; TODO: Home and end to begin and end of line (with sounds!)
;; TODO: externs for buzz library

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defn calculate-cursor []
  [(/ (.-innerWidth js/window) 2) (- (.-innerHeight js/window) 200)])

(defonce
  app-state
  (atom
    {:rand-seed (Math/random)
     :blocks    [[]]
     :position [10 10]
     :page-size [800 1200]
     :cursor (calculate-cursor)
     :tab-stop 10
     :text-visible false
     :text ""}
    ))

(def rgen (rng/rng 0xC0FFEE))
(defonce
  letter-profiles
  (vec (map (fn [_]
              [(- (rng/int rgen 10) 5)                      ;; sTop
               (dec (rng/int rgen 3))                       ;; sLeft
               (/ (rng/double rgen) 7)                      ;; sOpacity
               (- (rng/int rgen 2) 1)                       ;; lTop
               (+ (/ (rng/double rgen) 4) 0.50)])           ;; lOpacity
            (range 100))))

(defn create-letter [l pos]
  [l pos (rand-nth letter-profiles)])

(defn letter [[text [x y] [stop sleft sopacity ltop lopacity]]]
  [(dom/span
     #js {:className "letter shadow"
          :style     #js {:top     (+ y stop)
                          :left    (+ x sleft)
                          :opacity sopacity}}
     text)
   (dom/span
     #js {:className "letter"
          :style     #js {:top     (+ y ltop)
                          :left    x
                          :opacity lopacity}}
     text)]
  )

(defn block-view [block owner]
  (reify
    om/IRender
    (render [this]
       (apply dom/span
         #js {:className "block"}
         (apply concat (map letter block))))))


(defn page-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [[cx cy] (:cursor data)
            [x y] (:position data)
            [w h] (:page-size data)]
        (apply dom/div
          #js {:className "page"
               :id        "page"
               :style     #js {:top       (- cy y)
                               :left      (- cx x)
                               :width     w
                               :height    h}}
               (om/build-all block-view (:blocks data)))))))

(defn copy-all [data]
  (js/alert (:text data)))

(defn copy-button [data owner]
  (reify
    om/IRender
    (render [this]
      (let [v (:text-visible data)]
        (dom/div
          nil
          (if v
            (dom/textarea
              #js {:className "copyarea"
                   :style #js {:width "100%" :height (- (second (:cursor data)) 50)}}
              (:text data)))
          (dom/button #js {:className "copybutton"
                           :onClick   (fn [e & _]
                                        (om/transact! data :text-visible not)
                                        (.blur (.-target e)))
                           :style     #js {:top  (+ (second (:cursor data)) 40)
                                           :left 10}} "Copy"))))))


(om/root
  (fn [data owner]
    (reify om/IRenderState
      (render-state [_ _]
        (let [[cx cy] (:cursor data)
              [px py] (:position data)]
          (dom/div
            nil
            (dom/div #js {:className "logo"} "Undertype/")
            (dom/div #js {:className "roller"
                          :style     #js {:top (- cy 50)}})
            (dom/div
              #js {:className "cursor" :id "cursor"
                   :style     #js {:top  (+ cy 0)
                                   :left (- cx 2)}})
            (dom/div
              #js {:className "tabstop" :id "tabstop"
                   :style     #js {:top  (+ cy 35)
                                   :left (+ (:tab-stop data) (- cx px))}}
              "^")
            (dom/div #js {:className "cover"
                          :style     #js {:top (+ cy 30)}})
            (om/build copy-button data)

            (om/build page-view data)
            )))))
  app-state
  {:target (. js/document (getElementById "app"))})

(defn on-js-reload []

  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
) 



(defn snd [n]
  (js/buzz.sound. (str "sounds/" n) #js {:formats #js ["wav" "mp3" "ogg"]}))

(def sounds
  {:key       (map #(snd (str "key-" (gstring/format "%02d" (inc %)))) (range 22))
   :return    [(snd "typewriter-return-1")]
   :space     (map #(snd (str "space-0" (inc %))) (range 5))
   :backspace (map #(snd (str "space-0" (inc %))) (range 5))
   :forward   [(snd "typewriter-forward-1")]
   :tab       [(snd "tab")]
   :ding      [(snd "ding")]})

(defn play-sound [type]
  (let [s (rand-nth (get sounds type))]
    (.stop s)
    (.play s)))

(defn play-key [keycode]
  (case keycode
    13 (play-sound :return)
    32 (play-sound :space)
    8 (play-sound :backspace)
    9 (play-sound :tab)
    38 (play-sound :forward)
    40 (play-sound :forward)
    37 (play-sound :forward)
    39 (play-sound :forward)
    (play-sound :key)))

(defn bound [low x high]
  (max low (min high x)))

(defn move [state dx dy]
  (let [[x y] (:position state)
        [px py] (:page-size state)]
    (when (and (> x 0) (< (/ x px) 0.8) (> (/ (+ x dx) px) 0.8))
      (play-sound :ding))
    (assoc state :position [(bound 0 (+ x dx) px) (bound 0 (+ y dy) py)])))

(defn add-letter [{[x y] :position text :text :as state} l]
  (let [letter (create-letter l [(- x 12) y])]
    (->
      (if (> (count (last (:blocks state))) 250)
        (update-in state [:blocks] conj [letter])
        (update-in state [:blocks (dec (count (:blocks state)))] conj letter))
      (update-in [:text] str l))))

(defn keypress-listener [e]
  (play-key (.-keyCode e))
  (swap! app-state move 12 0)
  (case (.-keyCode e)
    13
    (swap!
      app-state
      #(-> %
           (move (- (:tab-stop %) (first (:position %)) ) 20)
           (update :text str (gstring/format (str "\r\n%" (Math/floor (/ (:tab-stop %) 12)) "s") ""))))
    (swap! app-state add-letter (js/String.fromCharCode (.-keyCode e)))))

(defn set-tabstop [state]
  (assoc state :tab-stop (-> state :position first)))

(defn backspace [{:keys [position tab-stop] :as s}]
  (let [[x y] position]
    (if (< (- x 12) tab-stop)
      (->
        s
        (move (* 12 -4) 0)
        (set-tabstop)
        (update :text #(apply str (drop 4 %))))
      (do
        (move s -12 0)
        ))))


(defn keydown-listener [e]
  #_(.log js/console  e)
  (let [keycode (.-keyCode e)]
    (if (#{9 8 38 40 37 39} keycode)
      (do
        (.preventDefault e)
        (play-key keycode)))

    (case keycode
      8 (swap! app-state backspace)
      38 (swap! app-state move 0 -20)                       ;; up
      40 (swap! app-state move 0 20)                        ;; down
      37 (swap! app-state move -12 0)                       ;; left
      39 (swap! app-state move 12 0)                        ;; right
      9 (swap! app-state
               #(->
                 %
                 (move (* 12 4) 0)
                 (set-tabstop)
                 (update :text str "    ")))
      nil)))

(defn resized []
  (swap! app-state assoc-in [:cursor] (calculate-cursor)))

(defn register-stuff []
  (set! (.-onresize js/window) #(resized))
  (.addEventListener js/document "keypress" #(keypress-listener %) false)
  (.addEventListener js/document "keydown" #(keydown-listener %) false)
  "Registered")

(defonce s (register-stuff))



;; Palette ala: http://www.colourlovers.com/palette/3670689/American_Typewriter
;; sounds:
;; http://www.soundjay.com/typewriter-sounds.html

;; https://www.freesound.org/people/fastson/sounds/75188/
;; https://www.freesound.org/people/NHumphrey/sounds/204466/
;; https://www.freesound.org/people/lonemonk/sounds/47046/
;; https://www.freesound.org/people/gynation/sounds/82378/
;; https://www.freesound.org/people/stereostereo/sounds/124529/


