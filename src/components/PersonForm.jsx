const PersonForm = ({ handleAddContact, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={handleAddContact}>
      <div>
        name: <input type='text' id='name' value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        phone number: <input type='tel' id='phone' value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm