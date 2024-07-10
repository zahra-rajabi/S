import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">Online Shop</header>
      {children}
    </>
  );
}

export default Layout;
