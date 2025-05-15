import { TableDataType } from "@/lib/types/table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function Row({ data, headers } : { data: TableDataType, headers: string[] }) {

  const cells = headers.map((header, i) => (
    <TableCell key={i}>{data[header]}</TableCell>
  ))

  return (
    <TableRow>
      { cells }
    </TableRow>
  )
}