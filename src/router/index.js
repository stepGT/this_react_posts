import About from "../pages/About";
import PostIDPage from "../pages/PostIDPage";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIDPage, exact: true },
];
