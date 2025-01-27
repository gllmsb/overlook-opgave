import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/Footer/Footer";



const MainLayout = () => {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
