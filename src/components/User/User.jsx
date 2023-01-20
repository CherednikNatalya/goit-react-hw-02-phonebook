import { nanoid } from 'nanoid'

const newUser ={
    id : nanoid(),
    name: nanoid(),
}
export const User =({id, name}) => {
    
    return(
        <>
            <h2>Contacts</h2>
            <ul>
            {this.state.users.map(user =>(
                <li key={user.id}>
<p>{user={user.name}}</p>
<button
text="Delete Contact"
deleteContact={this.handleDeleteContact}/>
                </li>
            ))}
            </ul>
        </>

    )
}