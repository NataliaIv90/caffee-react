import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from './pages/pageLayout/PageLayout';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: '/',
    children: [
      // {
      //   element: <Navigate to='main' />,
      //   path: '/',
      // },
      {
        element: <div>Menu</div>,
        path: 'menu',
        index: true,
      },

    ],
  },
]);

export default router;