import { THead } from "../Styled/StyledTable";

// Renders a tableheader based on your column.
function THeader({ columns }) {
  return (
    <THead>
      <tr>
        {columns.map((column) => (
          <th style={{ cursor: "pointer" }} key={column.path || column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </THead>
  );
}

export default THeader;
