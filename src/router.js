import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import React from "react";
import CountersPage from "./pages/CountersPage";
import TodoListsPage from "./pages/TodoListsPage";
import CharacterCounterPage from "./pages/CharacterCounterPage";
import PostListPage from "./pages/PostListPage";
import TempCelciusPage from "./pages/TempCelciusPage";
import FontPage from "./pages/FontPage";
import UseRecoilCallbackPage from "./pages/UseRecoilCallbackPage";
import RepositoryPage from "./pages/RepositoryPage";

export const homeChildren = [
  {
    title: '값을 전역으로 관리하는 기능 (카운터)',
    path: "/counters",
    element: <CountersPage />,
  },
  {
    title: '값을 전역으로 관리하는 기능 (배열)',
    path: "/todo-lists",
    element: <TodoListsPage />,
  },
  {
    title: '글자 수 세기',
    path: "/character-counter",
    element: <CharacterCounterPage />,
  },
  {
    title: '외부로 부터 데이터를 요청하기',
    path: "/post-list",
    element: <PostListPage />,
  },
  {
    title: 'selector로 섭씨 화씨 변환하기',
    path: "/temp-celcius",
    element: <TempCelciusPage />,
  },
  {
    title: 'FontPage',
    path: '/font-page',
    element: <FontPage />
  },
  {
    title: 'UseRecoilCallbackPage',
    path: '/use-recoil-callback',
    element: <UseRecoilCallbackPage />
  },
  {
    title: 'Repository Patterns with Recoil getCallback',
    path: '/repository-get-callback',
    element: <RepositoryPage />
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeChildren,
  },
]);

export default router;
