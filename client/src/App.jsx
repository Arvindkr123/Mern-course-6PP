import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Login from "./components/auth/login/Login.jsx";
import Register from "./components/auth/register/Register.jsx";
import ForgetPassword from "./components/auth/forgetPassword/ForgetPassword.jsx";
import ResetPassword from "./components/auth/resetPassword/ResetPassword.jsx";
import Contact from "./components/contact/Contact.jsx";
import CoursePage from "./components/coursePage/CoursePage.jsx";
import About from "./components/about/About.jsx";
import Profile from "./components/profile/Profile.jsx";
import Subscribe from "./components/subscribe/Subscribe.jsx";
import RequestCourse from "./components/requestCourse/RequestCourse.jsx";
import PaymentSuccess from "./components/payments/PaymentSuccess.jsx";
import PaymentFail from "./components/payments/PaymentFail.jsx";
import NotFound from "./components/layout/not_found/NotFound.jsx";
const App = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request" element={<RequestCourse />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/payment_success" element={<PaymentSuccess />} />
        <Route path="/payment_fail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
