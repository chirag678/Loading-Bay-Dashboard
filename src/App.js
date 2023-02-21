import "./App.scss";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LBay1 from "./pages/LBay1";
import LBay2 from "./pages/LBay2";
import LBay3 from "./pages/LBay3";
import LBay4 from "./pages/LBay4";
import LBay5 from "./pages/LBay5";
import LBay6 from "./pages/LBay6";
import LBay7 from "./pages/LBay7";
import LBay8 from "./pages/LBay8";
import Info from "./pages/Info";
import Thatwaniguy from "./pages/Thatwaniguy/Thatwaniguy";
import Contact from "./pages/Contact/Contact";
import Paypal from "./pages/Paypal/Paypal";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<LBay1 />} />
          <Route path="/LBay2" element={<LBay2 />} />
          <Route path="/LBay3" element={<LBay3 />} />
          <Route path="/LBay4" element={<LBay4 />} />
          <Route path="/LBay5" element={<LBay5 />} />
          <Route path="/LBay6" element={<LBay6 />} />
          <Route path="/LBay7" element={<LBay7 />} />
          <Route path="/LBay8" element={<LBay8 />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Info/Thatwaniguy" element={<Thatwaniguy />} />
          <Route path="/Info/Contact" element={<Contact />} />
          <Route path="/Info/Paypal" element={<Paypal />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
