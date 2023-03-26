import React from 'react';
import { Navigate } from 'react-router-dom';
import Viewer from './views/dynamic/Viewer';
import NotFoundView from './views/errors/NotFoundView';

const routes = [
  {
    path: '/',
    children: [
      { path: 'privacy', element: <Viewer type="privacy" /> },
      { path: '/', element: <Navigate to="/privacy" /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
