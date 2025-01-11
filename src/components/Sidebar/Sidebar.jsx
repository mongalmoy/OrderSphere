import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [iconData, setIconData] = useState([
    {
      icon: <AiFillHome />,
      name: "Home",
      active: true,
    },
    {
      icon: <BiBarChartSquare />,
      name: "Chart",
      active: false,
    },
    {
      icon: <SlNotebook />,
      name: "Note",
      active: false,
    },
    {
      icon: <CiWallet />,
      name: "Wallet",
      active: false,
    },
    {
      icon: <IoBagCheckOutline />,
      name: "Bag",
      active: false,
    },
  ]);

  return (
    <div className="sidebar">
      <nav className="sidebar_nav">
        {iconData.map((el, index) => {
          return (
            <div
              className={
                el.active ? "sidebar_nav_active_icons" : "sidebar_nav_icons"
              }
              key={index}
              onClick={() => {
                setIconData(prev => {
                  prev.forEach(el => el.active = false);
                  prev[index].active = true;
                  return [...prev]
                })
              }}
            >
              {el.icon}
            </div>
          );
        })}
      </nav>
      <div className="logout_icon_div">
        <RiLogoutCircleRLine />
      </div>
    </div>
  );
};

export default Sidebar;
