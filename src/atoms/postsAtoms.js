import { atom, selector, selectorFamily } from 'recoil';

export const postsState = atom({
  key: 'postsState',
  default: [],
});

export const fetchPosts = selector({
  key: 'fetchPosts',
  get: async ({ get }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  },
});


export const fetchPostsWithParameter = selectorFamily({
  key: 'fetchPostsWithParameter',
  get: (postId) => async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
  },
});
