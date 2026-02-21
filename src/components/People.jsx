const People = ({ people, searchTerm }) => {
  return (
    <ul>
      {people.filter(person => {
        return searchTerm === '' ? person : person.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </ul>
  )
}

export default People