import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import FriendDetails from "../Pages/FriendDetailsPage/FriendDetails";
import TimeLine from "../Pages/FriendDetailsPage/TimeLine/TimeLine";
import ErrorElement from "../Pages/FriendDetailsPage/ErrorElement/ErrorElement";
import StatsPage from "../Pages/FriendDetailsPage/StatsPage/StatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component:HomePage
      },
      {
        path:'/friend/:id',
        Component:FriendDetails
      },
      {
        path:'/timeline',
        Component:TimeLine
      },
      {
        path:'/stats',
        Component:StatsPage
      }

    ],

    errorElement:<ErrorElement></ErrorElement>

  },

]);