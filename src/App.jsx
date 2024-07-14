import "./App.css";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
