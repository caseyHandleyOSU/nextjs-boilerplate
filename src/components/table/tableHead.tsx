import MUITableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function TableHead({ headers } : { headers: string[]} ) {

  return (
    <MUITableHead>
      <TableRow>
        {headers.map((header, i) => (
          <TableCell
            key={i}
            sx={{
              textTransform: "capitalize"
            }}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
}