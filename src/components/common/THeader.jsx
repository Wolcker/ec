function THeader({ columns }) {
  return (
    <tr>
      {columns.map((column) => (
        <th style={{ cursor: "pointer" }} key={column.path || column.key}>
          {column.label}
        </th>
      ))}
    </tr>
  );
}

export default THeader;
