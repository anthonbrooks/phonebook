const Filter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div>
      <label htmlFor="search" className="hidden">
        search
      </label>
      <input
        className="border rounded-md pl-2 m-3"
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
