import _ from "lodash";
import { TBody as TableBody } from "../Styled/StyledTable";

//takes the path or content from the column and returns path or content. Content is only added to you can easy add buttons/icons/functions to your table.
function TBody({ data, columns }) {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.path) return _.get(item, column.path);
    return null;
  };

  // makes a uniq key for your map below.
  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <TableBody>
      {data.map((item) => (
        <tr key={item.title}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </TableBody>
  );
}

export default TBody;
