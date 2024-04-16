//import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Rental from './pages/Rental/Rental.jsx';
import Error from './pages/Error/Error.jsx';
import Layout from './components/Layout/Layout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/Home',
                element: <Home />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Rental/:id',
                element: <Rental />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
