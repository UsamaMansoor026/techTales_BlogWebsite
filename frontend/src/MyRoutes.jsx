import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetail from "./pages/PostDetail";
import Authors from "./pages/Authors";
import AuthorPosts from "./pages/AuthorPosts";
import CreatePost from "./pages/CreatePost";

const MyRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "authors",
          element: <Authors />,
        },
        {
          path: "/posts/users/:id",
          element: <AuthorPosts />,
        },
        {
          path: "/posts/create",
          element: <CreatePost />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/posts/:id",
          element: <PostDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MyRoutes;
