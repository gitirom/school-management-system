import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import all components
import Register from "./components/Register";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";
import UserName from "./components/UserName";


// root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserName  />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/Password',
    element: <Password />
  },
  
  {
    path: '/Profile',
    element: <Profile />
  },
  {
    path: '/Recovery',
    element: <Recovery />
  },
  {
    path: '/Reset',
    element: <Reset />
  },
  {
    path: '/*',
    element: <PageNotFound />
  },
  
]);
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
