export const getUserId = state => state.users

export const getUserName = (state, id) => state.users[id].name

export const getUserAge = (state, id) => state.users[id].age

export const getUserSex = (state, id) => state.users[id].sex
