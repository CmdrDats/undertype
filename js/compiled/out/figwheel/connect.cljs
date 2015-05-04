(ns figwheel.connect (:require [om-tut.core] [figwheel.client]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload om-tut.core/on-js-reload, :build-id "dev"})

