import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionCount } from "@/types/questionnaire";

interface QuestionStatsProps {
  records: QuestionCount[];
}

export const QuestionStats = ({ records }: QuestionStatsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Records</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl. No</TableHead>
              <TableHead>Activities</TableHead>
              <TableHead className="text-right">Total Count</TableHead>
              <TableHead className="text-right">Today's Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.questionNo}>
                <TableCell>{record.questionNo}</TableCell>
                <TableCell>Q{record.questionNo}</TableCell>
                <TableCell className="text-right">{record.totalCount}</TableCell>
                <TableCell className="text-right">{record.todayCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};