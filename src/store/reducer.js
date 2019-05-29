export const reducer = (state = {}, action) =>  {
	switch (action.type) {
		case 'ADD_PERSON':
		let id = action.id
			return ({
					users: {
						...state.users,
						[id]: {
							id: action.id,
							name: action.name,
							age: action.age,
							sex: action.sex
						}
					}
			})
		case 'DELETE_PERSON':
			state = {
				...state,
				users: {
					...state.users
				}
			}
			delete state.users[action.id]

			return state
		default:
			return state
	}
}
