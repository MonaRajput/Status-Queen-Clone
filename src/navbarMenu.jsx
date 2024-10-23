import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SpaIcon from "@mui/icons-material/Spa";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CakeIcon from "@mui/icons-material/Cake";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const NavbarMenu = () => {
  const [menutoggle, setMenuetoggle] = useState(false);

  const menuetoggling = () => {
    setMenuetoggle(!menutoggle);
  };

  return (
    <>
      {!menutoggle && (
        <nav className="w-full relative bg-white-100 flex p-4 justify-between  md:hidden h-[70px]">
          <button>
            <HomeIcon className="w-[20px] h-[20px]" />
          </button>

          <button onClick={menuetoggling}>
            <MenuIcon className="w-[20px] h-[20px]" />
          </button>
        </nav>
      )}

      {menutoggle && (
        <div className="md:hidden block">
          <div className="absolute top-0 bg-white-300 md:hidden block z-4 w-full  h-[70px] ">
            <button onClick={menuetoggling}>
              <CloseIcon className="w-[20px] h-[20px]  ml-[150px] mt-[20px]" />
            </button>
          </div>

          <div className=" h-full hidden bg-gray-100 absolute z-90 top-0 right-0 pl-[6px]">
            <ul className="bg-pink-300">
              <li>
                <a href="#" className="text-xs text-[#3c4858] ">
                  <HomeIcon fontSize="small" style={{ color: "#3c4858" }} />
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-[#3c4858] ">
                  <SpaIcon fontSize="small" style={{ color: "#3c4858" }} />
                  STATUS
                  <ArrowDropDownIcon />
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-[#3c4858] ">
                  <InsertPhotoIcon
                    fontSize="small"
                    style={{ color: "#3c4858" }}
                  />
                  WALLPAPER
                  <ArrowDropDownIcon style={{ fontSize: "15px" }} />
                </a>
              </li>

              <li>
                <a href="#" className="text-xs text-[#3c4858] ">
                  <CakeIcon fontSize="small" style={{ color: "#3c4858" }} />
                  BIRTHDAY WISHES
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
