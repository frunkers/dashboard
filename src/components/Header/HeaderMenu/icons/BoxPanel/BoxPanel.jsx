import { Component } from "react";

export default class BoxPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { fillProp, strokeProp } = this.props;

		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="none">
				<path stroke={strokeProp} stroke-width="1.04" d="M1.18 4.68V.96h19.64v3.72H1.18ZM2.4 16.67V4.78h17.2v11.9H2.4Z" />
				<rect width="9.6" height="3.6" x="6.24" y="7.77" fill={fillProp} rx="1.8" />
			</svg>
		)
	}
}