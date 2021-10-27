import About from "../pages/About";
import Login from "../pages/Login";
import PostIDPage from "../pages/PostIDPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIDPage, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
