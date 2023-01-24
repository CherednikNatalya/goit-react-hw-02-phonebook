import { Contact } from './Contact';
// import css from './ContactsList.module.css';
// import { PropTypes } from 'prop-types';

// import { nanoid } from 'nanoid'

export const ContactsList =({contactList = [], onDelete}) => {


    return(
        <>
            <h2>Contacts</h2>
            <ul >
    {contactList.map(item => (
      <Contact key={item.id} contact={item} onDelete={onDelete} />
    ))}
  </ul>
        </>

    )
}

// export const ContactsList = ({ contactList = [], onDelete }) => (
//   <ul className={css.contactsList}>
//     {contactList.map(item => (
//       <Contact key={item.id} contact={item} onDelete={onDelete} />
//     ))}
//   </ul>
// );



// export const ContactsList = ({ contactList = [], onDelete }) => (
//   <ul className={css.contactsList}>
//     {contactList.map(item => (
//       <Contact key={item.id} contact={item} onDelete={onDelete} />
//     ))}
//   </ul>
// );

// ContactsList.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };





// import { PropTypes } from 'prop-types';
// import css from './Contact.module.css';

// export const Contact = ({ contact: { id, name, number }, onDelete }) => {
    
//   const handleClick = () => onDelete(id);

//   return (
//     <li className={css.listItem}>
//       <p>
//         {name}: {number}
//       </p>
//       <button type="button" onClick={handleClick}>
//         Delete
//       </button>
//     </li>
//   );
// };

// Contact.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
//     onDelete:PropTypes.func.isRequired
// };



