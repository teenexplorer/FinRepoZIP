import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionStats } from "@/components/QuestionStats";
import { QuestionnaireStats, QuestionCount } from "@/types/questionnaire";

const Dashboard = () => {
  // Mock data for statistics
  const stats: QuestionnaireStats = {
    totalBlocks: 25,
    totalGP: 223,
    totalBeneficiaries: 55000,
    totalFieldInspectors: 223 ,
  };

  // Mock data for questions records
  const questionRecords: QuestionCount[] = Array.from({ length: 12 }, (_, i) => ({
    questionNo: i + 1,
    totalCount: 0,
    todayCount: 0,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Blocks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBlocks}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total GP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalGP}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Beneficiaries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBeneficiaries}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Field Inspectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalFieldInspectors}</div>
            </CardContent>
          </Card>
        </div>

        {/* Questions Records Table */}
        <QuestionStats records={questionRecords} />
      </div>
    </motion.div>
  );
};

export default Dashboard;