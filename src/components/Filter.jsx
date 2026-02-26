const Filter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div>
      <label htmlFor="search">search:</label> <input type='text' id="search" value={searchTerm} onChange={handleSearchTermChange} placeholder="Find a contact..." />
    </div>
  )
}

export default Filter