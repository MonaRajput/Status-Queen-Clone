import { useState } from "react";
import { Menu } from "./menu";
import { NavbarMenu } from "./navbarMenu";
import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import SpaIcon from "@mui/icons-material/Spa";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CakeIcon from "@mui/icons-material/Cake";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ComputerIcon from "@mui/icons-material/Computer";
import { WhatsappImage } from "./whatsappImage";
import { WhatsappStatus } from "./whatsappStatus";
import { DpImages } from "./dpImages";

export const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownOpenWallpaper(false);
  };

  const [dropdownOpenwallpaper, setDropdownOpenWallpaper] = useState(false);

  const toggleDropdownWallpaper = () => {
    setDropdownOpenWallpaper(!dropdownOpenwallpaper);
    setDropdownOpen(false);
  };
  return (
    <>
      <div className=" bg-white w-full h-[70px] fixed top-0 z-10 px-4 hidden md:block">
        <div className=" max-w-[1140px] mx-auto h-full flex items-center  justify-between">
          {/* Logo Section */}
          <div className="h-full flex items-center">
            <img
              src="/public/statusqueenLogo.png"
              alt="Status Queen"
              className="h-full"
            />
          </div>

          {/* Navigation Section */}
          <nav className="hidden md:flex gap-6">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="#"
                  className="flex items-center text-xs text-[#3c4858]"
                >
                  <HomeIcon fontSize="medium" style={{ color: "#3c4858" }} />
                  HOME
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-xs text-[#3c4858]"
                >
                  <SpaIcon fontSize="medium" style={{ color: "#3c4858" }} />
                  STATUS
                  <ArrowDropDownIcon
                    style={{
                      fontSize: "13px",
                      transform: dropdownOpen
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                    }}
                  />
                </button>
              </li>
              <li>
                <button
                  onClick={toggleDropdownWallpaper}
                  className="flex items-center text-xs text-[#3c4858]"
                >
                  <InsertPhotoIcon
                    fontSize="medium"
                    style={{ color: "#3c4858" }}
                  />
                  WALLPAPER
                  <ArrowDropDownIcon
                    style={{
                      fontSize: "13px",
                      transform: dropdownOpen
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                    }}
                  />
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-xs text-[#3c4858]"
                >
                  <CakeIcon fontSize="medium" style={{ color: "#3c4858" }} />
                  BIRTHDAY WISHES
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {dropdownOpen && (
        <div className="fixed right-[280px] p-4 top-[76px] w-[192px] h-[202px]  bg-white rounded-lg shadow-md z-[30]">
          <Menu IconComponent={InsertPhotoIcon} text="DP IMAGES" />
          <Menu IconComponent={InsertPhotoIcon} text="IMAGE STATUS" />
          <Menu IconComponent={CreateIcon} text="ENGLISH STATUS" />
          <Menu IconComponent={CreateIcon} text="HINDI STATUS" />
          <Menu IconComponent={CreateIcon} text="PUNJABI STATUS" />
        </div>
      )}

      {dropdownOpenwallpaper && (
        <div className="fixed right-[180px] p-4 top-[76px] w-[192px] h-auto  bg-white rounded-lg shadow-md z-[30]">
          <Menu IconComponent={StayCurrentPortraitIcon} text="MOBILE" />
          <Menu IconComponent={ComputerIcon} text="DESKTOP" />
        </div>
      )}

      <div className="sm:block md:hidden">
        <NavbarMenu />
      </div>

      <div className="w-full relative h-[596px] md:h-[538px] bg-no-repeat bg-cover bg-[url(https://cdn.statusqueen.com/img/mob-banner.webp)]">
        <WhatsappImage />
      </div>

      <div className="w-full h-full bg-gray-400">
        <WhatsappStatus />
      </div>
      <div>
        <DpImages />
      </div>
    </>
  );
};
