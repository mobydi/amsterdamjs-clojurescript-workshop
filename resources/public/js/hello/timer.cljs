(ns hello.timer
  (:require [reagent.core :as r]
            [goog.dom :as gdom]))

;; Build Timer app that displays current time every second
;; and allows changing the color of the text via input field

;; Hints:
;; - use `defonce` form to define a var that preserves it's value between hot-reloads
;; - use `.toLocaleTimeString` method on `js/Date` object to format tim string

(defn clock [props]
  [:div (.toLocaleTimeString (new js/Date) "en-US")])
  

(defn app []
  [:div (.toLocaleTimeString (new js/Date) "en-US")])

(r/render [app] (gdom/getElement "app-root"))
