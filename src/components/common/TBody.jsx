import _ from "lodash";

function TBody({ data, columns }) {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.path) return _.get(item, column.path);
    return null;
  };

  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
