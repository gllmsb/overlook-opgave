import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { HotelsDestinations } from "./pages/HotelsDestinations";
import { Rooms } from "./pages/Rooms";
import { Reservations } from "./pages/Reservations";
import { Login } from "./pages/Login";
import { Notfound } from "./pages/Notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="hotels" element={<HotelsDestinations />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
