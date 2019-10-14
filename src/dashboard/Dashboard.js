import React from 'react';
import { connect } from 'react-redux';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import * as redux from '../redux/renderWithRedux';

class Dashboard extends React.Component {
	render() {
		console.log(this.props);
		const { closed, locked } = this.props;

		return (
			<>
				<Display locked={locked} closed={closed} />
				<Controls
					locked={locked}
					closed={closed}
					toggleLocked={this.toggleLocked}
					toggleClosed={this.toggleClosed}
				/>
			</>
		);
	}

	toggleLocked = () => {
		this.props.dispatch({ type: redux.TOGGLE_LOCKED });
	};

	toggleClosed = () => {
		this.props.dispatch({ type: redux.TOGGLE_CLOSED });
	};
}

export default connect(state => state.gate)(Dashboard)