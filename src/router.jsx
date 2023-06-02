import {createBrowserRouter} from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import TodoPage from "./pages/TodoPage.jsx";
import TodoWithUseRecoilCallbackPage from "./pages/TodoWithUseRecoilCallbackPage.jsx";

export const homeChildren = [
  {
    path: '',
    element: <></>,
    title: 'Home',
  },
  {
    path: '/todo',
    element: <TodoPage/>,
    title: 'TodoList',
  },
  {
    path: '/todo-with-use-recoil-callback',
    element: <TodoWithUseRecoilCallbackPage/>,
    title: 'Todo With useRecoilCallback',
  },
];

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout/>,
      children: homeChildren,
    },
  ],
  {
    basename: '/my-recoil-app/',
  }
);

export default router;
