import React from "react";
import { User } from "../../classes/user";

interface TableProps {
  data: any[]; // Array of data objects
  columns: string[]; // Array of column names
  onActionClick: (item: any) => void; // Callback function when action button is clicked
}

const Table: React.FC<TableProps> = ({ data, columns, onActionClick }) => {
  console.log(data);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((user: User) => {
          return (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => onActionClick(user)}
              >
                Action
              </button>
            </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
