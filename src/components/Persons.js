import React from 'react'
import Person from './Person'

import { getUserId } from '../store/selectors'
import { connect } from 'react-redux'

const Persons = ({ ids }) => {
	return (
		ids.map(id => (
			<Person key={id} id={id}/>
		))
	)
}

const mapStateToProps = (state) => {
	return {
		ids: Object.keys(getUserId(state))
	}
}

export default connect(mapStateToProps)(Persons)
