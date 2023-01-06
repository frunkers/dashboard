import { Component } from "react";

export default class CalendarPanel extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		const { fillProp, strokeProp } = this.props;

		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none">
				<path fill={fillProp} d="M17.33 15.02H.73v2.93c0 1.15.94 2.08 2.09 2.08h12.43c1.15 0 2.08-.93 2.08-2.08v-2.93Z" />
				<path stroke={strokeProp} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.04"
					d="M15.53 2.55H2.46A1.9 1.9 0 0 0 .6 4.47v13.44a1.9 1.9 0 0 0 1.86 1.92h13.07a1.9 1.9 0 0 0 1.87-1.92V4.47a1.9 1.9 0 0 0-1.87-1.92ZM12.73.63v3.84M5.27.63v3.84M.6 8.31h16.8" />
			</svg>
		)
	}
}