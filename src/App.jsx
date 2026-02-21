import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const hook = () => {
    axios
      .get('http://localhost:3001/people')
      .then(response => {
        setPeople(response.data)
      })
    }

  useEffect(hook, [])

  const handleAddContact = (e) => {
    e.preventDefault();
    const nameExists = people.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
    } else {
        const contact = {
        name: newName,
        number: newNumber
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFiltered(people.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new contact:</h3>
      <PersonForm handleAddContact={handleAddContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Contacts</h3>
      <People filtered={filtered} />
    </div>
  )
}

export default App
