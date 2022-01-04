import Home from './components/pages/Home';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import PostDetails from './components/pages/PostDetails';
import Posts from './components/pages/Posts';
import PostSearch from './components/pages/PostSearch';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AllPosts from './components/pages/AllPosts';
import PostComment from './components/pages/PostComment';

const routes = [
  { title: 'Ana Sayfa', path: '/', element: <Home />, isNav: true },
  { title: 'Hakkimizda', path: 'about', element: <About />, isNav: true },
  { title: 'İletisim', path: 'contact', element: <Contact />, isNav: true },
  { title: 'Posts', path: 'posts', element: <AllPosts />, isNav: true },
  // { title: 'AllPosts', path: 'allposts', element: <AllPosts />, isNav: true },
  {
    title: 'PostDetail',
    path: 'posts/:postId',
    element: <PostDetails />,
    isNav: false,
  },
  { title: 'Search', path: 'arama', element: < PostSearch />, isNav: false },
  { title: 'Comment', path: 'posts/:postId/comments', element: <PostComment />, isNav: false },
];

export default routes;
