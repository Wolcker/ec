import THeader from "./THeader";
import TBody from "./TBody";

function Table({ data, columns, sortColumn, onSort }) {
  return (
    <table className="table">
      <THeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
