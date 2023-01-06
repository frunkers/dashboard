import { Component } from "react";

import { default as Menu } from "./HeaderMenu/HeaderMenu";

import "./Header.css";
import logo from "./img/logo.svg";

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__container">
					<div className="header__logo">
						<img src={logo} alt="logo" className="header__image" />
					</div>

					<Menu />

					<button className="header__plus"></button>
				</div>
			</header>
		)
	}
}