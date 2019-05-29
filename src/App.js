import React from 'react'

import AddingForm   from './components/AddingForm'
import DeletedForm from './components/DeletedForm'
import Persons from './components/Persons'




class App extends React.Component {


	render() {
		return (
			<div>
			<AddingForm onNewPerson=''/>
			<DeletedForm onDelPerson=''/>
			<Persons />
			</div>
		)
	}

}


export default App
