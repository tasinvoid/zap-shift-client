import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import AuthLayouts from '../layouts/AuthLayouts';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';

import ServiceAreaMap from '../pages/Coverage/ServiceAreaMap';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
    children:[
      {
        Component:Home,
        index:true,
      },
      {
        path:'/coverage',
        Component:ServiceAreaMap,

      }
    ]
  },
  {
    path: '/auth',
    Component:AuthLayouts,
    children:[
      {
        path:'/auth/login',
        Component:Login
      },
      {
        path:'/auth/register',
        Component:Register
      }
    ]
  }
]);


export default router;