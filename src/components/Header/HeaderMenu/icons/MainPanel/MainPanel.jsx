import { Component } from "react";

export default class MainPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { fillProp, strokeProp } = this.props;

		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
				<path fill={fillProp} d="M1.293 10.183h15.408v5.798H1.293z" />
				<path stroke={strokeProp} stroke-width="1.044"
					d="M13.185 1h2.916c.576 0 1.044.467 1.044 1.044v8.093M5.343 1H1.894C1.318 1 .85 1.467.85 2.044v8.093m0 0v5.048c0 .576.468 1.044 1.044 1.044h14.207c.576 0 1.044-.468 1.044-1.044v-5.048m-16.295 0h16.295" />
			</svg>
		)
	}
}