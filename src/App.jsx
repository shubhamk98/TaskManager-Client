import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";
import EditPage from "./components/EditPage/EditPage";
import ViewTask from "./components/ViewTask";
import { Toaster } from "react-hot-toast";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/newTask" element={<EditPage />} />
        <Route path="/ViewComplete" element={<ViewTask />} />
        <Route path="/modal" element={<Modal/>} />
      </Routes>
    </Router>
  );
};

export default App;
