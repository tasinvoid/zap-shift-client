import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayouts from '../../layouts/RootLayouts';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
    children:[
      {
        Component:Home,
        index:true,
        
      }
    ]
  },
]);


export default router;