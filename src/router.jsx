import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import TodoWithUseRecoilCallbackPage from './pages/TodoWithUseRecoilCallbackPage';
export const homeChildren = [
  {
    path: '',
    element: <></>,
    title: 'Home',
  },
  {
    path: '/todo',
    element: <TodoWithUseRecoilCallbackPage />,
    title: 'TodoList with useRecoilCallback',
  },
];

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      children: homeChildren,
    },
  ],
  {
    basename: '/my-recoil-app/',
  }
);

export default router;
