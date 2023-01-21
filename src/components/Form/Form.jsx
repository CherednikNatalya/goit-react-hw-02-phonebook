import { Component } from 'react';

export class Form extends Component {
    state = {
        name:'',
        number:'',
    };

    handleChange = event=>{
        const { name, value } = event.target;
        this.setState ({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({name:'', number:''})
    }

    render () {
        const {name} = this.state;
        
        return(
<form onSubmit={this.handleSubmit}>
    <h2>Phonebook</h2>
    <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <p>Name</p>
          </label>
        <input
        id="name"
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChange}
/>
</div>

<div className="mb-3">
          <label htmlFor="number" className="form-label">
            <p>Number</p>
          </label>
        <input
  type="text"
  name="number"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChange}
/>
</div>

<button className="btn btn-primary" type="submit" >
          Add contact
        </button>

</form>

        )
    }
}







// import { PropTypes } from 'prop-types';

// export const UsersItem = ({ user, onDelete }) => {
//   const { id, name, email, bio, skills, isOpenToWork } = user;

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   return (
//     <div className="card my-3">
//       <div className="card-body">
//         <h5 className="card-title d-flex">
//           {name}
//           {isOpenToWork && (
//             <p className="badge bg-success ms-3">Open to work</p>
//           )}
//         </h5>

//         <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
//         <p className="card-text">{bio}</p>

//         <div className="d-flex mb-2">
//           {skills.map(skil => (
//             <span key={skil} className="badge bg-dark me-1">
//               {skil}
//             </span>
//           ))}
//         </div>

//         <div className="d-flex">
//           <button
//             type="button"
//             className="card-link btn-link"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };