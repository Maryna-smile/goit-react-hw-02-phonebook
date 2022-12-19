export const ContactList = ({ contacts, onDeleteUser }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (<li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteUser(id)}>Delete</button>
        </li>)
      })}
    </ul>
  );
};
