const SearchBar = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search"
    />
  );
};

export default SearchBar;
