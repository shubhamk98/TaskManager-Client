import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";
import EditPage from "./components/EditPage/EditPage";

const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit/:id" element={<EditPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
