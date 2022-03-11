import THeader from "./THeader";
import TBody from "./TBody";
import { Table as MainTable } from "../Styled/StyledTable";

// Takes data and columns and makes a table. Sends to table header and table body.

function Table({ data, columns }) {
  return (
    <MainTable>
      <THeader columns={columns} />
      <TBody data={data} columns={columns} />
    </MainTable>
  );
}

export default Table;
