import { Component } from "react";

export default class StarsPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { fillProp, strokeProp } = this.props;

		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
				<path fill={fillProp}
					d="M11.016 19.687c-1.763-7.88 5.354-10.526 9.12-10.733l1.24 2.824-3.169 3.444.482 4.202-1.515 2.273-1.446-.413-4.712-1.597Z" />
				<path stroke={strokeProp} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.044"
					d="M10.128 4.67c.766-1.552 2.978-1.552 3.744 0l1.35 2.736a2.088 2.088 0 0 0 1.571 1.141l3.023.442c1.712.25 2.394 2.355 1.155 3.562l-2.184 2.128a2.088 2.088 0 0 0-.601 1.848l.515 3.003c.292 1.706-1.498 3.007-3.03 2.201l-2.7-1.419a2.088 2.088 0 0 0-1.943 0l-2.699 1.42c-1.532.805-3.322-.496-3.03-2.202l.515-3.003a2.088 2.088 0 0 0-.6-1.848L3.028 12.55c-1.24-1.207-.557-3.311 1.155-3.562l3.023-.442c.68-.099 1.266-.526 1.57-1.141l1.35-2.736Z" />
			</svg>
		)
	}
}