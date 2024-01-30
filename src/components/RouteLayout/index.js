import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { Provider } from "react-redux";
import store from "../../store/store";

const RouteLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RouteLayout;
