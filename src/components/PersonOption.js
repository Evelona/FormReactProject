import React from 'react'
import { connect } from 'react-redux'
import {StyledOption} from './styles/deletedform'

import {
	getUserName,
	getUserSex
} from '../store/selectors'

const PersonOption = ({ name, id }) => {
	return (
		<StyledOption value={id}>{name}</StyledOption>
	)
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.id
	return {
		name: getUserName(state, id),
		sex: getUserSex(state, id)
	}
}

export default connect(mapStateToProps)(PersonOption)
