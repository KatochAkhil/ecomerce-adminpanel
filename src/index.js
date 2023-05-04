import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <NotificationContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
