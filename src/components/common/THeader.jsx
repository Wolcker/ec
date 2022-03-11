function THeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th style={{ cursor: "pointer" }} key={column.path || column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default THeader;
