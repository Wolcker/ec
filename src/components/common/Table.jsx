import THeader from "./THeader";
import TBody from "./TBody";
import { Table as MainTable } from "../Styled/StyledTable";

function Table({ data, columns, sortColumn, onSort }) {
  return (
    <MainTable>
      <THeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TBody data={data} columns={columns} />
    </MainTable>
  );
}

export default Table;
