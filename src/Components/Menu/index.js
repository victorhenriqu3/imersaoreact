import React from "react";
import Button from "../Button/index";
//import ButtonLink from "../ButtonLink/index";
import Logo from "../../assets/images/Logo.png";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Vicflix Logo"></img>
      </a>
      <Button as="a" className="ButtonLink">Novo Video</Button>
    </nav>
  );
}
export default Menu;
