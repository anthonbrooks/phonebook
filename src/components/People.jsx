const People = ({ filtered }) => {
  return (
    <ul>
      {filtered.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </ul>
  )
}

export default People