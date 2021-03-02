import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <h1>Covid-19 Data &copy; {date}</h1>
    </div>
  );
}

export default Footer;
