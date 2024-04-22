import "./App.css";
import Admin from "./pages/Admin/Layout/Admin";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
// import NoParking from "./pages/NoParking";
// import { Tourism } from "./pages/Tourism";
// import Transport from "./pages/Transport";
import Adashboard from "./pages/Admin/AdminPages/Adashboard";
import Reports from "./pages/Admin/AdminPages/Reports";
import User from "./pages/Admin/AdminPages/User";
import Settings from "./pages/Admin/AdminPages/Settings";
import Login from "./pages/Admin/Login";
import Noparking from "./pages/Noparking/Layout/Noparking";
// import ParkingSidebar from "./pages/Noparking/Layout/ParkingSidebar";
import Page1 from "./pages/Noparking/NoparkingPages/Page1";
import Page3 from "./pages/Noparking/NoparkingPages/Page3";
import Page2 from "./pages/Noparking/NoparkingPages/Page2";
// import NoparkingDashboard from "./pages/Noparking/NoparkingPages/NoparkingDashboard";
// import LoginParking from "./pages/Noparking/NoparkingPages/LoginParking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="tourism" element={<Tourism />} /> */}
        {/* <Route path="transport" element={<Transport />} /> */}
        <Route path="login" element={<Login />} />
        {/* <Route path="loginparking" element={<LoginParking/>}/> */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<Adashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="user" element={<User />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="parking" element={<Noparking/>}>
          {/* <Route index element={<NoparkingDashboard/>}/> */}
          <Route index element={<Page1/>}/>
          <Route path="page2" element={<Page2/>}/>
          <Route path="page3" element={<Page3/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// create app which have a first login if loging then go to the dashboard and which have sidebar and main content and sidebar have three button device, feature, livestreem, when click deive then open device page and device page it have to button anpr and persion when click then open multipale cards when click card then open ther single page set nested routing v6
