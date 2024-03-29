import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Header from "./components/layout/Header/Header.jsx";
import Courses from "./components/courses/Courses.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
