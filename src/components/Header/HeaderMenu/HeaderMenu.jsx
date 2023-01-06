import { Component } from "react";

import MainPanel from "./icons/MainPanel/MainPanel";
import StarsPanel from "./icons/StarsPanel/StarsPanel";
import CalendarPanel from "./icons/CalendarPanel/CalendarPanel";
import SmartPanel from "./icons/SmartPanel/SmartPanel";
import BoxPanel from "./icons/BoxPanel/BoxPanel";
import BasketPanel from "./icons/BasketPanel/BasketPanel";

import "./HeaderMenu.css";

const menu = [
	{src: MainPanel},
	{src: StarsPanel},
	{src: CalendarPanel},
	{src: SmartPanel},
	{src: BoxPanel},
	{src: BasketPanel},
];

export default class HeaderMenu extends Component {
	constructor() {
		super();
		this.state = {
			isActive: 0
		}
	}

	handleActive = (index) => {
		this.setState({
			isActive: index
		})
	}

	render() {
		const { isActive } = this.state;

		return (
			<nav className="header__menu">
				<ul className="header__list">
					{
						menu.map((elem, index) => {
							const IconComponent = elem.src;

							return (
								<li className="header__item"
									onClick={() => this.handleActive(index)}
									key={index}
									tabIndex="0">
										{
											<IconComponent fillProp={index == isActive ? "#ECEAFE" : "#D7D9E6"}
												strokeProp={index === isActive ? "#5531FB" : "#000"} 
											/>
										}
								</li>
							)
						})
					}
				</ul>
			</nav>
		)
	}
}