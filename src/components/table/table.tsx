import { TableDataType } from "@/lib/types/table";
import Paper from "@mui/material/Paper";
import MUITable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

export default function Table({ rows } : { rows: TableDataType[] }) {
  const headers = Object.keys(rows[0]);

  return (
    <TableContainer component={Paper}>
      <MUITable>
        <TableHead headers={headers} />
        <TableBody rows={rows} headers={headers} />
      </MUITable>
    </TableContainer>
  );
}