import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">dr.docs</div>
      <div className="nav-links">
        <Link to="info">Profile</Link>
        <Link to="file">Documents</Link>
      </div>
    </nav>
  );
};

export default Navbar;
