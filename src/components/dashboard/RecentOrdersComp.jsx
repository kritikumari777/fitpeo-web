import React from 'react';
import { useTable } from 'react-table';
import { customerColumns, customerData } from '../dashboard/CardArray';

function RecentOrdersComp() {
  const columns = customerColumns
  const data = customerData
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns , data });

  return (
    <div className='container bg-[#212121] mt-5 rounded-md border border-zinc-900'>
    <div className='text-white font-medium text-lg sm:p-4 p-2'>Recent Orders</div>
    <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr  {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className='sm:p-4 p-1' {...column.getHeaderProps()} style={{ borderBottom: '1px solid black', textAlign: "start", color:"white" }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td className='sm:p-4 p-1' {...cell.getCellProps()} style={{ borderBottom: '1px solid black', color: "white" }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default RecentOrdersComp;