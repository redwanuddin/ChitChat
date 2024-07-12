import imgSignup from "../assets/imgSignup.png";

export default function SignUp() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-between">
        <div>
          <h1>Get started with easy Sign up</h1>
          <p>Sign up for free to enjoy it properly</p>
          <button className="bg-colorPrimaryBlue rounded-[86px] w-80 px-8 py-4 font-semibold text-white font-nunito text-[21px]">
            Sign up
          </button>
          <p>
            Already have an account?{" "}
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
