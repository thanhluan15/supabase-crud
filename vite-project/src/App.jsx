// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CreateBeverage from "./components/CreateBeverage";
import BeverageCard from "./components/BeverageCard";
import UpdateBeverage from "./components/UpdateBeverage"
import ListBeverage from "./components/ListBeverage";
import UploadVideo from "./components/UploadVideo.";
import LoginPage from "./components/LoginPage";
import NavbarTop from "./components/NavbarTop";
// import DeleteBeverage from "./components/DeleteBeverage";

function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <Routes>
        <Route path="/beverage" element={<BeverageCard />}/>
        <Route path="/beverage/create" element={<CreateBeverage/>} />
        <Route path="/beverage/update/:id" element={<UpdateBeverage/>} />
        <Route path="/beverage/upload" element={<UploadVideo/>} />
        <Route path="/list" element={<ListBeverage/>}/>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
