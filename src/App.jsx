import "./App.css";
import Homepage from "./Components/Homepage";
import SideBar from "./Components/SideBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
