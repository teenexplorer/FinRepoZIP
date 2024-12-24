import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReportStatsProps {
  totalBeneficiary: number;
  totalVisited: number;
  percentage: number;
}

export const ReportStats = ({ totalBeneficiary, totalVisited, percentage }: ReportStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-700">Total Beneficiary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalBeneficiary}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-700">Total Visited</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalVisited}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-700">Percentage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{percentage}%</p>
        </CardContent>
      </Card>
    </div>
  );
};