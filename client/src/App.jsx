import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Login from "./components/auth/login/Login.jsx";
import Register from "./components/auth/register/Register.jsx";
import ForgetPassword from "./components/auth/forgetPassword/ForgetPassword.jsx";
import ResetPassword from "./components/auth/resetPassword/ResetPassword.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
