function SearchBar({ value, onChange }) {
  return (
    <div className="mb-8">
      <label htmlFor="search" className="sr-only">
        Search photos by author
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by author..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none md:max-w-md"
      />
    </div>
  )
}

export default SearchBar
