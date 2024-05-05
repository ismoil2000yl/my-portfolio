import React, { startTransition, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, pages } from "./index";
import { useSelector } from "react-redux";
import { get } from "lodash";
import Layout from "components/layout";
import NotFound from 'pages/not-found'
import { Triangle } from "react-loader-spinner";


const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback={<div className="loading">
        <Triangle
        height="100"
        width="100"
        color="#070F1D"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      </div>}>{route.element}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};

const routesWrapper = () => {
  // const { isAuthenticated } = useSelector((state) => get(state, "auth"));
  const { myUser } = useSelector((state) => state.myUser)

  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {isAuthenticated ? (
        <Route path="/" element={<Layout />}>
          {/* {appRoutes(privateRoutes)} */}
          {appRoutes(pages)}
        </Route>
      ) : (
        appRoutes(authRoutes)
      )}
    </Routes>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default routesWrapper;