import { useState } from "react";
import { motion } from "framer-motion";
import { ReportStats } from "@/components/reports/ReportStats";
import { FilterSection } from "@/components/reports/FilterSection";
import { ActivityTable } from "@/components/reports/ActivityTable";
import { useToast } from "@/components/ui/use-toast";
import { Beneficiary, Block } from "@/types/reports";

const Reports = () => {
  const { toast } = useToast();
  const [selectedBlock, setSelectedBlock] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);

  // Generate 40 blocks (10 blocks for each of the 4 subdivisions)
  const blocks: Block[] = Array.from({ length: 4 }, (_, i) => 
    Array.from({ length: 10 }, (_, j) => ({
      subdivisionName: `Subdivision ${i + 1}`,
      blockName: `Block ${j + 1}`
    }))
  ).flat();

  // Generate 12 questions for activity list
  const activities = Array.from({ length: 12 }, (_, i) => `Q${i + 1}`);

  const handleFetch = () => {
    if (!selectedBlock || !selectedActivity) {
      toast({
        title: "Selection Required",
        description: "Please select both a block and an activity",
        variant: "destructive"
      });
      return;
    }

    // Mock data - in real app, this would fetch from your backend
    const mockBeneficiaries: Beneficiary[] = [
      {
        name: "J",
        referenceNo: "REF001",
        contactNumber: "1234567890",
        blockName: selectedBlock,
        surveyorName: "Inspector 1",
        activityName: selectedActivity,
        answer: "Sample answer for the selected question"
      },
      // Add more mock data as needed
    ];

    setBeneficiaries(mockBeneficiaries);
    toast({
      title: "Data Fetched",
      description: `Showing results for ${selectedBlock} - ${selectedActivity}`,
    });
  };

  const handleView = (beneficiary: Beneficiary) => {
    toast({
      title: `${beneficiary.activityName} Answer`,
      description: beneficiary.answer || "No answer provided",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold mb-8">Report page and Activity Status</h1>

        <ReportStats
          totalBeneficiary={55000}
          totalVisited={1500}
          percentage={60}
        />

        <FilterSection
          blocks={blocks.map(b => `${b.subdivisionName} - ${b.blockName}`)}
          activities={activities}
          onBlockChange={setSelectedBlock}
          onActivityChange={setSelectedActivity}
          onFetch={handleFetch}
        />

        <ActivityTable 
          records={beneficiaries.map(b => ({
            beneficiaryName: b.name,
            referenceNo: b.referenceNo,
            blockName: b.blockName,
            surveyorName: b.surveyorName,
            activityName: b.activityName,
            contactNumber: b.contactNumber
          }))} 
          onView={handleView}
        />
      </div>
    </motion.div>
  );
};

export default Reports;