import PageNavigator from "../commonComponents/PageNavigator";
import SignUp from "./Signup";
import Signin from "./Signin";

export default function Main() {
  const checking = true;
  return <>{checking ? <SignUp /> : <Signin />}</>;
}
