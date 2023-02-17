import React from "react";
import "../css/footer.min.css";

const Footer = () => {
  let thisYear = new Date().getFullYear();

  return (
    <footer>
      <p className="bold">&copy; mealStation - {thisYear}</p>
    </footer>
  );
};

export default Footer;
