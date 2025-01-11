import "./Header.css";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBar from "./Searchbar";

const Header = () => {
  return (
    <header>
      <div className="app_logo">
        <IoLogoAppleAppstore />
      </div>
      <div className="header_body">
        <SearchBar />
        <div className="app_profile flexbox">
          <div className="logo_container">
            <CiMail />
          </div>
          <div className="logo_container">
            <CiSettings />
          </div>
          <div className="logo_container">
            <IoIosNotificationsOutline />
          </div>

          <img
            className="profile_img"
            src={require("../../assets/img/profile_image.jpg")}
            alt="profile_img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
