import { TextField } from "@mui/material";
import imgSignup from "../assets/imgSignup.png";

export default function SignUp() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-between">
        <div className="pl-[190px]">
          <h1 className="font-nunito text-colorPrimaryTextDarkBlue text-[34px] font-bold">
            Get started with easy sign up
          </h1>
          <p className="font-nunito text-xl font-normal opacity-[42%] text-black pt-3 pb-10">
            Sign up for free to enjoy it properly
          </p>

          <div>
            <TextField
              className="border-colorPrimaryBlue border-spacing-2"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
          </div>

          <button className="bg-colorPrimaryBlue rounded-[86px] w-96 px-8 py-4 font-semibold text-white font-nunito text-[21px]">
            Sign up
          </button>
          <p className="text-center font-openSan text-[14px] font-normal">
            Already have an account?
            <span className="text-colorAccentYellow font-openSan text-[14px] cursor-pointer">
              Sign in
            </span>
          </p>
        </div>

        <div>
          <picture>
            <img src={imgSignup} alt="Image" />
          </picture>
        </div>
      </div>
    </>
  );
}
