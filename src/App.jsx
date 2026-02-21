import { useState, useEffect } from 'react';
import peopleService from './services/people.js'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';
import Notification from './components/Notification';

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const hook = () => {
    peopleService
      .getAll()
      .then(response => {
        setPeople(response.data)
      })
  }

  useEffect(hook, [])

  const handleAddContact = e => {
    e.preventDefault();

    const contact = {
      name: newName,
      number: newNumber
    }

    const nameExists = people.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      
    peopleService
      .update(nameExists.id, contact)
      .then(() => {
        setNewNumber();
        setSuccessMessage(`Contact info for ${nameExists.name} has been updated!`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        .catch(error => {
          setErrorMessage(`Contact for ${nameExists.name} has already been removed!`)
          console.log(error.message)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        });
    });
    } 

    peopleService
      .create(contact)
      .then(response => {
        setPeople(people.concat(response.data));
        setSuccessMessage(`${contact.name} has been added to the Phonebook!`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000);
        setNewName('');
        setNewNumber('');
    });  
  }

  const handleDeleteContact = (id, name) => {
    const confirmRemoval = window.confirm(`Delete ${name}?`);

    if (!confirmRemoval) return;

    peopleService
      .remove(id)
      .then(() => setPeople(people.filter(person => person.id !== id)))
      .catch((error) => console.log(error.message));
  }

  const handleUpdateContact = (id, name, number) => {
    const confirmUpdate = window.confirm(`Are you sure you want to replace the number for ${name}?`);

    if (!confirmUpdate) return;

    peopleService
      .update(id)
      .then(() => console.log(number))
      .catch(error => {
        setErrorMessage(`Contact for ${name} has already been removed!`)
        // console.log(error.message)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      });;
  }

  const handleNameChange = e => {setNewName(e.target.value);}

  const handleNumberChange = e => {setNewNumber(e.target.value)};

  const handleSearchTermChange = e => {setSearchTerm(e.target.value)};
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h3>Add a new contact:</h3>
      <PersonForm handleAddContact={handleAddContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Contacts</h3>
      <People people={people} searchTerm={searchTerm} handleDeleteContact={handleDeleteContact} handleUpdateContact={handleUpdateContact} />
    </div>
  )
}

export default App
