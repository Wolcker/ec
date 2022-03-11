import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 96%;
  margin: 32px;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const THead = styled.thead`
  border: 1px solid black;
  text-align: left;
  font-size: 24px;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
`;

export const TBody = styled.tbody`
  border: 1px solid black;
  text-align: left;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;

  td {
    border: 1px solid black;
  }

  tr {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;
