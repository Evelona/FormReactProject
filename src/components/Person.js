import React from 'react'
import { connect } from 'react-redux'
import StyledPerson from './styles/person'

import {
	getUserName,
	getUserAge,
	getUserSex
} from '../store/selectors'

const Person = ({ id, name, age, sex }) => {
	return (
		<StyledPerson key={id} id={id} sex={sex} className='person'>
		Person:
			<p className='person_name'>name: {name}</p>
			<p className='person_age'>age: {age}</p>
			<p className='person_sex'>sex: {sex}</p>
		</StyledPerson>
	)
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.id
	return {
		name: getUserName(state, id),
		age: getUserAge(state, id),
		sex: getUserSex(state, id)
	}
}

export default connect(mapStateToProps)(Person)











// const name = props.name
// const age = props.age
// const sex = props.sex
