import React from 'react'
import { Form, Field } from 'react-final-form'

import { connect } from 'react-redux'
import { addPerson } from '../store/actions'
import {StyledAddForm, StyledInput, StyledButton} from './styles/addingform'



const AddingForm = (props) => {
	return (
		<Form onSubmit = {props.onNewPerson}>
		{ ({handleSubmit}) =>	(
			<StyledAddForm onSubmit={handleSubmit}>
				<div>
					<div>AddingForm</div>
					<hr />
							<Field name='name' render={
								({ input, meta }) => <StyledInput placeholder='Name' {...input} />
							}  />
						<br/>
							<Field name='age' placeholder='Age' render={
								({ input, meta }) => <StyledInput placeholder='Age' {...input} />
							}  />
						<br/>
							<Field name='sex' placeholder='Sex' render={
								({ input, meta }) => <StyledInput placeholder='Sex' {...input} />
							}  />
						<br/>
							<StyledButton type='submit'>Submit</StyledButton>
				</div>
			</StyledAddForm>)}
		</Form>
		)

}

const mapStateToProps = (state) => {
	return {
		store: state
	}
}

const mapDispatchToProps = (dispatch) => ({
		onNewPerson(values){
			dispatch(addPerson(values))
		}
})
export default connect(mapStateToProps, mapDispatchToProps)(AddingForm)
