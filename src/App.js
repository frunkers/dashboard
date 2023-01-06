import { Component, Fragment } from "react";

import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";

import "./css/main.css";

// user
import avatar from "./assets/img-db/user/avatar.png";

// leftPanelStats
import leftPanelStats1 from "./assets/img-db/leftPanelStats/leftPanelStats1.svg";
import leftPanelStats2 from "./assets/img-db/leftPanelStats/leftPanelStats2.svg";
import leftPanelStats3 from "./assets/img-db/leftPanelStats/leftPanelStats3.svg";


const user = {
	name: "AR Shakir",
	dateStatus: "Joined 1 months ago",
	src: avatar
};

const leftPanelStats = [
	{name: "Goals", icon: leftPanelStats1},
	{name: "Monthly Plan", icon: leftPanelStats2},
	{name: "Settings", icon: leftPanelStats3},
];


export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Header></Header>
				<LeftPanel userDB={user} leftPanelStatsDB={leftPanelStats}></LeftPanel>

				<main>

				</main>
			</Fragment>
		)
	}
}