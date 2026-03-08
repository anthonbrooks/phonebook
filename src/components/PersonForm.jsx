const PersonForm = ({
  handleAddContact,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={handleAddContact} className="flex justify-center">
      <div>
        <label htmlFor="name" className="hidden">
          name
        </label>{" "}
        <input
          className="border rounded-md pl-2 m-2"
          type="text"
          id="name"
          value={newName}
          onChange={handleNameChange}
          required
          placeholder="Contact Name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="hidden">
          phone number:
        </label>{" "}
        <input
          className="border rounded-md pl-2 m-2"
          type="tel"
          id="phone"
          value={newNumber}
          onChange={handleNumberChange}
          required
          placeholder="Phone Number"
        />{" "}
        <button className="border rounded-md cursor-pointer pl-2 pr-2">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
