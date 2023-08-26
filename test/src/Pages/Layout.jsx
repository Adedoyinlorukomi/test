import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Dashboard" target="">Dashboard</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;