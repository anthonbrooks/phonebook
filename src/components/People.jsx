const People = ({ people, searchTerm, handleDeleteContact, handleUpdateContact}) => {
  return (
    <ul>
      {people.filter(person => {
        return searchTerm === '' ? person : person.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .map(person => <p key={person.name}>{person.name} {person.number} <button onClick={handleUpdateContact} type='submit' >Edit</button> <button onClick={() => handleDeleteContact(person.id, person.name)} type='submit'>Delete</button></p>)}
    </ul>
  )
}

export default People