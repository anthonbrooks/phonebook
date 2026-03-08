import { useState } from "react";

const People = ({ people, searchTerm, handleDeleteContact, handleChange }) => {
  return (
    <div>
      <th className="grid grid-cols-[1fr_4fr_auto_auto] font-bold pb-2 mb-2">
        <div>Name</div>
        <div>Phone Number</div>
        <div></div>
        <div></div>
      </th>
      <ul>
        {people
          .filter((person) => {
            return searchTerm === ""
              ? person
              : person.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((person) => (
            <li key={person.id}>
              <Person
                person={person}
                handleDeleteContact={handleDeleteContact}
                handleChange={handleChange}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

const Person = ({ person, handleChange, handleDeleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [number, setNumber] = useState(person.number);

  let contactContent;

  if (isEditing) {
    contactContent = (
      <div className="grid grid-cols-[2fr_2fr_auto_auto] items-center gap-4 font-bold p-2">
        {person.name}
        <input
          type="tel"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="bg-white rounded-xl text-center"
        />
        <div>
          <button
            className="border rounded-md cursor-pointer p-1"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
          <button
            className="border rounded-md cursor-pointer p-1"
            onClick={() => handleDeleteContact(person.id, person.name)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    contactContent = (
      <div className="grid grid-cols-[2fr_2fr_auto_auto] items-center gap-4 font-bold p-2">
        <div>{person.name}</div>
        <div className="text-center">{person.number}</div>
        <div className="flex justify-end">
          <button
            className="border rounded-md cursor-pointer p-1"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="border rounded-md cursor-pointer p-1"
            onClick={() => handleDeleteContact(person.id, person.name)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  return <div className="text-2xl">{contactContent} </div>;
};

export default People;
