import { useState } from "react";

const People = ({ people, searchTerm, handleDeleteContact, handleChange}) => {
  return (
    <ul>
      {people.filter(person => {
        return searchTerm === '' ? person : person.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .map(person => 
        <li key={person.id}>
          <Person person={person} handleDeleteContact={handleDeleteContact} handleChange={handleChange} />
        </li>
    )}
    </ul>
  )
}

const Person = ({person, handleChange, handleDeleteContact}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [number, setNumber] = useState(person.number)

  let contactContent;

  if (isEditing) {
    contactContent = (
      <>
        {person.name}
        <input
          type='tel'
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />
        <button className="border rounded-md cursor-pointer" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    contactContent = (
      <>
        {person.name} {person.number} <button className="border rounded-md cursor-pointer" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <div>
      {contactContent} <button className="border rounded-md cursor-pointer" onClick={() => handleDeleteContact(person.id, person.name)}>Delete</button>
    </div>
  )
}

export default People