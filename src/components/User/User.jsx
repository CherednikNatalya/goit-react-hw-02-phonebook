import { nanoid } from 'nanoid'

export const User =({users, onDelete}) => {
const id = nanoid()
// const {id, name} = user
    // handleDeleteUser = event => {
    //     onDelete(id)
    // }
    
    return(
        <>
            <h2>Contacts</h2>
            <ul>
            {users.map(user =>(
                <li key={id}>
<p>{users.name}</p>
<button
text="Delete Contact"
deleteContact={this.handleDeleteUser}/>
                </li>
            ))}
            </ul>
        </>

    )
}