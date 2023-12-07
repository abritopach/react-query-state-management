import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { CreateUser } from './pages/CreateUser';
import { EditUser } from './pages/EditUser';
import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreateUser />,
      },
      {
        path: "/:id",
        element: <EditUser/>,
      },
    ]
  }
]);

const App = () => ( <RouterProvider router={router} /> )

export default App

