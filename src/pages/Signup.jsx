import { TextField } from "@mui/material";
import imgSignup from "../assets/imgSignup.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      {/* Sign up section */}
      <div className="flex justify-between">
        <div className="w-[55%] flex justify-center items-center">
          <div className="flex flex-col justify-start items-start gap-y-10">
            <div className="flex flex-col gap-y-[13px]">
              <h1 className="font-nunito text-colorPrimaryTextDarkBlue text-[34px] font-bold">
                Get started with easy sign up
              </h1>
              <p className="font-nunito text-xl font-normal opacity-[42%] text-black">
                Sign up for free to enjoy it properly
              </p>
            </div>

            <div className="pb-[51px]">
              <TextField
                className="border-colorPrimaryBlue border-spacing-2"
                label="Full Name"
                variant="outlined"
                fullWidth
              />
            </div>

            <button className="bg-colorPrimaryBlue rounded-full w-full p-5 font-semibold text-white border-0 font-nunito text-[21px]">
              Sign up
            </button>
            <p className="text-center font-openSans text-[14px] font-normal pt-9">
              Already have an account?{" "}
              <Link to="/signin">
                <a className="text-colorAccentYellow font-openSan text-[14px]">
                  Sign in
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Image section */}
        <div className="w-[45%]">
          <picture>
            <img
              className="h-screen object-cover w-full"
              src={imgSignup}
              alt={imgSignup}
            />
          </picture>
        </div>
      </div>
    </>
  );
}
