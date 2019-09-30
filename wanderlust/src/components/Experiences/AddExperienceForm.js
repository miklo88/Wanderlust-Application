import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, title: '', comment: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { title, value } = event.target

		setUser({ ...user, [title]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.title || !user.comment) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Title</label>
			<input type="text" title="title" value={user.title} onChange={handleInputChange} />
			<label>Comment</label>
			<input type="text" title="comment" value={user.comment} onChange={handleInputChange} />
			<button>Add new Experience</button>
		</form>
	)
}

export default AddUserForm