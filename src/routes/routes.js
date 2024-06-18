import { AiOutlineUser } from "react-icons/ai"; 
import { BsTable } from "react-icons/bs"; 
import { BsTv } from "react-icons/bs"; 
import Home from "../views/Home";
import Tables from "../views/Tables";
import Profiles from "../views/Profile";

const routes = [
    {
      type: "route",
      name: "Home",
      key: "home",
      route: "/home",
      icon: <BsTv />,
      component: <Home />,
    },
    {
      type: "route",
      name: "Tables",
      key: "tables",
      route: "/tables",
      icon: <BsTable />,
      component: <Tables />,
    },
    {
      type: "route",
      name: "Profile",
      key: "profile",
      route: "/profile",
      icon: <AiOutlineUser />,
      component: <Profiles />,
    }
  ];
  
  export default routes;