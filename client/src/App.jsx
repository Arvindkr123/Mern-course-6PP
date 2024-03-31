import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
