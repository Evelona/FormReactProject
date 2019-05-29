import { v4 } from 'uuid'

export const addPerson = values => ({
	type: 'ADD_PERSON',
	id: v4(),
	name: values.name,
	age: values.age,
	sex: values.sex
})

export const deletePerson = id => ({
	type: 'DELETE_PERSON',
	id: id
})
