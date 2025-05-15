import { TableDataType } from "@/lib/types/table";
import MUITableBody from "@mui/material/TableBody";
import Row from "./row";

export default function TableBody({ rows, headers }: { rows: TableDataType[], headers: string[] }) {

  // Note: According to React, keys should **not** be generated at runtime and should instead be included with the data.
  // https://react.dev/learn/rendering-lists: "Rather than generating keys on the fly, you should include them in your data"
  const reactStars = rows.map((data: TableDataType, i: number) => (
      <Row key={i} data={data} headers={headers} />
    ))

  return (
    <MUITableBody>
      { reactStars }
    </MUITableBody>
  );
}