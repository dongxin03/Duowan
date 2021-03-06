import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/footer";
import { HashRouter as Router, Route } from "react-router-dom";
import "./common/css/reset.min.css";
import "./common/css/public.less";
import { Provider } from "react-redux";
import store from "./store";
import Star from "./router/star/Star";
import Profile from "./router/profile/Profile";
import Rank from "./router/rank/Rank";
import Forum from "./router/forum/Forum";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/star" component={Star} />
        <Route path="/forum" component={Forum} />
        <Route path="/rank" component={Rank} />
        <Route path="/profile" component={Profile} />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
