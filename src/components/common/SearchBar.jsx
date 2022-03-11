import styled from "styled-components";

const SearchBar = ({ value, onChange }) => {
  return (
    <Div>
      <Input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="Search"
      />
    </Div>
  );
};

export default SearchBar;

// The CSS for this component

const Input = styled.input`
  width: 97%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const Div = styled.div`
  text-align: center;
  margin: 32px;
  border-radius: 8px;
`;
