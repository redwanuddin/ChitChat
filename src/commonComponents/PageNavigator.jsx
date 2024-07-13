import { VscHome } from "react-icons/vsc";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { FaCloudUploadAlt } from "react-icons/fa"; /*Upload Icon [Used on profile hover] */

import imgProfile from "../assets/imgProfile.png";

export default function PageNavigator() {
  return (
    <>
      {/* <div className="w-[100%] h-[100vh]"></div> */}
      <div className="h-[90vh] w-24 bg-blue-700 m-8 rounded-lg flex flex-col justify-between items-center">
        <div className="pt-6">
          <picture>
            <img
              className="w-14 rounded-full h-14 cursor-pointer relative profileHover"
              src={imgProfile}
              alt={"Image not found"}
            />
          </picture>
          <span className="text-white absolute top-20 left-[70px] hidden">
            <FaCloudUploadAlt />
          </span>
        </div>
        <div className="text-white pb-24 flex flex-col gap-10">
          <span className="text-3xl cursor-pointer">
            <VscHome />
          </span>
          <span className="text-3xl cursor-pointer">
            <BiSolidMessageRoundedDots />
          </span>
          <span className="text-3xl cursor-pointer">
            <IoNotificationsOutline />
          </span>
          <span className="text-3xl cursor-pointer">
            <IoSettingsOutline />
          </span>
        </div>
        <div className="pb-6">
          <span className="text-white text-3xl cursor-pointer">
            <ImExit />
          </span>
        </div>
      </div>
    </>
  );
}
