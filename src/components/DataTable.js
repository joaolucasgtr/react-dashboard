import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

const DataTable = ({ title, headers, rows }) => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.filter(h => !h.hidden).map((header, i) =>
              <TableCell key={i}>{header.label}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>
            <TableRow key={row.id}>
              {headers.filter(h => !h.hidden).map((head, i) =>
                <TableCell key={i}>{row[head.prop]}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default DataTable;