import { Component } from "react";

import LeftPanelStats from "./LeftPanelStats/LeftPanelStats";

import graph from "./img/graph.svg";

import "./LeftPanel.css";

export default class LeftPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userDB, leftPanelStatsDB } = this.props;

		return (
			<section className="left-panel">
				<div className="left-panel__container">
					<div className="left-panel__user">
						<div className="left-panel__avatar">
							<img src={userDB.src} alt="avatar" className="left-panel__avatar-image" />
						</div>
						<div className="left-panel__data-user">
							<p className="left-panel__name-user">{userDB.name}</p>
							<p className="left-panel__date-join">{userDB.dateStatus}</p>
						</div>
					</div>

					<LeftPanelStats leftPanelStatsDB={leftPanelStatsDB}></LeftPanelStats>

					<div className="left-panel__activity">
						<div className="left-panel__activity-offer">
							<p className="left-panel__activity-title">Activity Graph</p>
							<span className="left-panel__activity-total">$186k</span>
						</div>
						<img src={graph} alt="graph" className="left-panel__activity-graph" />
					</div>
				</div>
			</section>
		)
	}
}