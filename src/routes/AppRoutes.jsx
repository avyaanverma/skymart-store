import React from 'react'
import { createBrowserRouter, Navigate } from "react-router"
import Home from "../screens/Home"
import About from "../screens/About"
import AppLayout from '../layouts/AppLayout'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'


const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
        { index: true, Component: Home },
        { path: "about", Component: About }
    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: AuthLayout,
    children: [
      { index: true, Component: Register }
    ]
  }

])

export default router
