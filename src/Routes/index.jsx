import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import FrameWorkLayout from "../layouts/FrameWorkLayout.jsx";
import Java from "../Frameworks/java/Java";
import NodeJS from "../Frameworks/nodejs/NodeJs";
import ExpressJs from "../Frameworks/expressjs/ExpressJs";
import SpringBootDoc from "../Frameworks/springboot/SpringBootDocumentation.jsx";
import ReactNative from "../Frameworks/React Native/ReactNative";
import Django from "../Frameworks/Django/Django";
import Flutter from "../Frameworks/Flutter/Flutter";
import Ruby from "../Frameworks/Ruby On Rails/Ruby";
import Flask from "../Frameworks/Flask/Flask";
import TenserFlow from "../Frameworks/TenserFlow/TenserFlow";
import JobsLayout from "../layouts/JobsLayout";
import AboutUs from "../layouts/AboutUsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/connections",
    element: <ConnectionLayout />,
  },
  {
    path: "/jobs",
    element: <JobsLayout />,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/frameworks",
    element: <FrameWorkLayout/>
  },
  {
    path: "/frameworks/java",
    element: <Java/>
},
{
    path: "/frameworks/nodejs",
    element: <NodeJS/>
},
{
    path: "/frameworks/expressjs",
    element: <ExpressJs/>
},
{
    path: "/frameworks/springboot",
    element: <SpringBootDoc/>
},
{
    path: "/frameworks/reactnative",
    element: <ReactNative/>
},
{
    path: "/frameworks/django",
    element: <Django/>
},
{
    path: "/frameworks/flutter",
    element: <Flutter/>
},
{
    path: "/frameworks/rubyonrails",
    element: <Ruby/>
},
{
    path: "/frameworks/flask",
    element: <Flask/>
},
{
    path: "/frameworks/tenserflow",
    element: <TenserFlow/>
}
]);
