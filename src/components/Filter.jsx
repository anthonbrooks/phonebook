const Filter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div>
      search: <input type='text' value={searchTerm} onChange={handleSearchTermChange} placeholder="Find a contact..." />
    </div>
  )
}

export default Filter