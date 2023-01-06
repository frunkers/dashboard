import { Component } from "react";

import "./LeftPanelStats.css";

export default class LeftPanelStats extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { leftPanelStatsDB } = this.props;

		return (
			<div className="left-panel-stats">
				<ul className="left-panel-stats__list">
					{
						leftPanelStatsDB.map((elem) => {
							const { name, icon } = elem;

							return (
								<li className="left-panel-stats__item">
									<img src={icon} alt={name} className="left-panel-stats__icon" width="53" height="53"/>
									<p className="left-panel-stats__name">{name}</p>
									<button className="left-panel-stats__btn"></button>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}