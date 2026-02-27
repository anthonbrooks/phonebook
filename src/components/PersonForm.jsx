const PersonForm = ({ handleAddContact, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={handleAddContact}>
      <div>
        <label htmlFor='name'>name:</label> <input className="border rounded-md cursor-pointer" type='text' id='name' value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor='phone'>phone number:</label> <input className="border rounded-md cursor-pointer" type='tel' id='phone' value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button className="border rounded-md cursor-pointer">add</button>
      </div>
    </form>
  )
}

export default PersonForm