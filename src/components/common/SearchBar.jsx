const SearchBar = ({ value, onChange }) => {
  return (
    <input value={value} onChange={(e) => onChange(e.currentTarget.value)} />
  );
};

export default SearchBar;
