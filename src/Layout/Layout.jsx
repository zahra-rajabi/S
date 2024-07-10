import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <header className="header">
        <Link to="/products">Online Shop</Link>
      </header>
      {children}
    </>
  );
}

export default Layout;
