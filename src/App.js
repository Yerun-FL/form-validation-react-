import "./App.css";
import FormValidation from "./Components/FormValidation";
import NavBarValidation from "./Components/Navbar";
import SubNavBar from "./Components/SubnavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SuccessPage from "./Components/SuccessPage";

function App() {
  return (
    <div className="App">
      <NavBarValidation />
      <SubNavBar />
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
