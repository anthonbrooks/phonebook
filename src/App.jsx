import { useState, useEffect } from 'react';
import peopleService from './services/people.js'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';
import Notification from './components/Notification';
import '../src/App.css';

function App() {
  const [people, setPeople] = useState(null);
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
      }).catch(error => console.log(error));
  }

  useEffect(hook, [people])

  if (!people) {
    return null;
  }

  const handleAddContact = e => {
    e.preventDefault();

    const contact = {
      name: newName,
      number: newNumber
    }

    const nameExists = people.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      const exist = confirm(`${newName} is already added to the phonebook. Do you want to change their phone number?`)
      
      if (!exist) {
        // if user does not exist return
        return
      }
      //update the existing contact
      peopleService
        .update(nameExists.id, contact)
        .then(updatedContact => {
          setPeople(person => person.id === nameExists.id ? updatedContact : people);
          setSuccessMessage(`Contact info for ${nameExists.name} has been updated!`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000);
          setNewName('');
          setNewNumber('');
        })
          .catch(error => {
            setErrorMessage(`Contact for ${nameExists.name} has already been removed!`)
            console.log(error.message)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          });
    } else {
      //create a new contact if the name contact does not exist
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
  }

  const handleChange = (person) => {
    setPeople(
      people.map(p => {
        if (p.id === person.id) {
          return person;
        } else {
          return p;
        }
      })
    );
  }

  const handleDeleteContact = (id, name) => {
    const confirmRemoval = window.confirm(`Delete ${name}?`);

    if (!confirmRemoval) return;

    peopleService
      .remove(id)
      .then(() => setPeople(people.filter(person => person.id !== id)))
      .catch((error) => console.log(error.message));
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
      <People people={people} searchTerm={searchTerm} handleDeleteContact={handleDeleteContact} handleChange={handleChange} />
    </div>
  )
}

export default App
