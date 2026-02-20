import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddContact = (e) => {
    e.preventDefault();
    const contact = {
      name: newName
    }

    setPersons(persons.concat(contact));
    setNewName('');
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </ul>
    </div>
  )
}

export default App
