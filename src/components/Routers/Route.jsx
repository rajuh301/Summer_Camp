import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Home/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/DashBoadr/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import CreateClass from "../Pages/Classes/CreateClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import ShowClass from "../Dashboard/AdminHome/ShowClass/ShowClass";
import AllUser from "../Dashboard/UserHome/AllUsers/AllUser";
import MyClass from "../Pages/Classes/MyClass";
import AllClass from "../AllClass/AllClass";
import MyEnrollClass from "../AllClass/MyEnrollClass";
import Payment from "../AllClass/Payment";
import PaymentHistery from "../AllClass/PaymentHistery";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/paymenthistery',
        element: <PaymentHistery></PaymentHistery>
      },

      {
        path: '/myenrollclass',
        element: <MyEnrollClass></MyEnrollClass>
      },

      {
        path: '/allclass',
        element: <PrivateRoute><AllClass></AllClass></PrivateRoute>
      },



      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },

      {
        path: '/dashboard/createclass',
        element: <InstructorRoute><CreateClass></CreateClass></InstructorRoute>
      },
      {
        path: '/dashboard/myclass',
        element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },

      {
        path: '/dashboard/requestclass',
        element: <AdminRoute><ShowClass></ShowClass></AdminRoute>
      },

      {
        path: '/dashboard/alluser',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },


    ]


  }
]);