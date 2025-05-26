import config from "@/config";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import Register from "@/pages/Register";
import User from "@/pages/Profile";

const routes = [
  {
    path: config.routes.home,
    element: Home,
    layout: DefaultLayout,
  },
  //products
  {
    path: config.routes.products,
    element: Product,
    layout: DefaultLayout,
  },
  {
    path: config.routes.productDetail,
    element: ProductDetail,
    layout: DefaultLayout,
  },
  //users
  {
    path: config.routes.users,
    element: User,
    layout: DefaultLayout,
  },
  //auth
  {
    path: config.routes.login,
    element: Login,
    layout: null,
  },
  {
    path: config.routes.register,
    element: Register,
    layout: null,
  },
];

export default routes;
