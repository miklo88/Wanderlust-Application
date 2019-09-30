import React, { useState, Fragment } from 'react';
import AddUserForm from './AddExperienceForm';
import EditUserForm from './EditExperienceForm';
import UserTable from './UserExperienceCard';

// const Experience = () => {
// 	// Data
// 	const usersData = [
// 		{ id: 1, name: 'Tania', username: 'floppydiskette' },
// 		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
// 		{ id: 3, name: 'Ben', username: 'benisphere' },
//     ]
    const Experience = () => {
	// Data
	const usersData = [
		{ id: 1, title: 'Skydiving', comment: 'Totally spontaneous but fun!' },
		{ id: 2, title: 'Architecture Tours', comment: 'Great sightseeing tour!' },
		{ id: 3, title: 'Wine Tastings', comment: 'Had a blast, got really hammered!' },
	]

	const initialFormState = { id: null, title: '', comment: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>Experiences</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit your Experiences</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add experience</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Experiences</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default Experience;