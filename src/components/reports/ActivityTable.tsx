import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export interface ActivityRecord {
  beneficiaryName: string;
  referenceNo: string;
  contactNumber: string;
  blockName: string;
  surveyorName: string;
  activityName: string;
}

interface ActivityTableProps {
  records: ActivityRecord[];
  onView: (record: ActivityRecord) => void;
}

export const ActivityTable = ({ records, onView }: ActivityTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Beneficiary Name</TableHead>
          <TableHead>Reference No</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Block Name</TableHead>
          <TableHead>Surveyor Name</TableHead>
          <TableHead>Activity Name</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.beneficiaryName}</TableCell>
            <TableCell>{record.referenceNo}</TableCell>
            <TableCell>{record.contactNumber}</TableCell>
            <TableCell>{record.blockName}</TableCell>
            <TableCell>{record.surveyorName}</TableCell>
            <TableCell>{record.activityName}</TableCell>
            <TableCell>
              <Button variant="outline" onClick={() => onView(record)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};