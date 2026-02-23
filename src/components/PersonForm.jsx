const PersonForm = ({ handleAddContact, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={handleAddContact}>
      <div>
        <label htmlFor='name'>name:</label> <input type='text' id='name' value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor='phone'>phone number:</label> <input type='tel' id='phone' value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}

export default PersonForm