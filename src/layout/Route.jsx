/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Resume = lazy(() => import('../pages/Resume'));

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/resume", element: <Resume /> },
];

export default routes