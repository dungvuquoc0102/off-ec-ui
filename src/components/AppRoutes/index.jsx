import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import routes from "@/routes";
import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => {
          let Layout;
          switch (route.layout) {
            case void 0:
              Layout = DefaultLayout;
              break;
            case null:
              Layout = NoLayout;
              break;
            default:
              Layout = route.layout;
              break;
          }
          console.log;
          return (
            <Route key={route.path} element={<Layout />}>
              <Route path={route.path} element={<route.element />} />
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
