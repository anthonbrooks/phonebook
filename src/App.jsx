import { useState } from 'react'

function App(props) {
  const [people, setPeople] = useState(props.people) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    const nameExists = people.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
    } else {
        const contact = {
        name: newName,
        phone: newNumber
      }

      setPeople(people.concat(contact));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required />
        </div>
        <div>
          phone number: <input type='tel' value={newNumber} onChange={handleNumberChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {people.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
      </ul>
    </div>
  )
}

export default App
