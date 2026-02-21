const Filter = ({ search, handleSearch}) => {
  return (
    <div>
      search: <input type='text' value={search} onChange={handleSearch} />
    </div>
  )
}

export default Filter