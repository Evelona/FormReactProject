import React from 'react'
import { Form, Field } from 'react-final-form'

import {StyledDelForm, StyledButton} from './styles/addingform'
import {StyledSelect} from './styles/deletedform'
import PersonOption from './PersonOption'

import { connect } from 'react-redux'
import {deletePerson} from '../store/actions'
import { getUserId } from '../store/selectors'

const DeletedForm  = ({ state, onDelPerson }) => {

	const showResults = ({ id }) => {
		 onDelPerson(id)
	}

	return (
		<Form onSubmit = {showResults}>
		{ ({handleSubmit}) =>
		(<StyledDelForm onSubmit={handleSubmit}>
			<div>DeletedForm</div>
			<hr />
			<Field name="id" render={
				({input}) =>
					<StyledSelect {...input}>
						<option>Choose</option>
						{(Object.keys(state)).map((id) => (
							<PersonOption key={id} id={id} />
						))}
					</StyledSelect>
			}>
			</Field>

			<StyledButton type='submit'>Delete</StyledButton>

			</StyledDelForm>)}
			</Form>
		)
	}

const mapStateToProps = state => {
	return {
		state: getUserId(state)
	}
}
const mapDispatchToProps = dispatch => ({
		onDelPerson(id){
			dispatch(deletePerson(id))
		}
})
export default connect(mapStateToProps, mapDispatchToProps)(DeletedForm)
