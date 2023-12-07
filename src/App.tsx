import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { CreateUser } from './pages/CreateUser';
import { EditUser } from './pages/EditUser';
import { Home } from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
)

export default App

