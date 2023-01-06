import { Component } from "react";

export default class SmartPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { fillProp, strokeProp } = this.props;

		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" fill="none">
				<path stroke={strokeProp} stroke-width="1.044" d="M4.363.88H15.7M3.037 3.74H16.96" />
				<path fill={fillProp}
					d="M1.575 14.492h16.883v4.16a2.088 2.088 0 0 1-2.088 2.088H3.663a2.088 2.088 0 0 1-2.088-2.088v-4.16Z" />
				<rect width="16.956" height="14.556" x="1.521" y="6.329" stroke={strokeProp} stroke-width="1.044" rx="1.566" />
			</svg>
		)
	}
}