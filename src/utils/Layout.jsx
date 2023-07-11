import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import AdminNavbar from "./navbar/Admin.navbar";
import { storageAdmin } from "../config/vars";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  const admin = localStorage.getItem(storageAdmin);

  return (
    <div className=" flex flex-col h-screen">
      <header className=" md:min-h-[10vh]" id="navbar">
        {admin ? <AdminNavbar /> : <Navbar />}
      </header>
      <main className=" grow " id="children">
        {children}
      </main>
      <footer className=" bg-EAgreen-dark-800 " id="footer">
        <Footer />
      </footer>
    </div>
  );
}
