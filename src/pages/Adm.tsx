import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Report {
  id: string;
  name: string;
  link: string;
  uploadedAt: string;
}

const Adm = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [newReportLink, setNewReportLink] = useState("");
  const [newReportName, setNewReportName] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedReports = localStorage.getItem("adm-reports");
    if (savedReports) {
      setReports(JSON.parse(savedReports));
    }
  }, []);

  const handleUpload = (name: string) => {
    if (!newReportLink) return;

    const newReport: Report = {
      id: Date.now().toString(),
      name,
      link: newReportLink,
      uploadedAt: new Date().toISOString()
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);
    localStorage.setItem("adm-reports", JSON.stringify(updatedReports));
    
    setNewReportLink("");
    setNewReportName("");
    
    toast({
      title: "Report Added",
      description: "The report has been successfully uploaded"
    });
  };

  const handleRemoveReport = (id: string) => {
    const updatedReports = reports.filter(r => r.id !== id);
    setReports(updatedReports);
    localStorage.setItem("adm-reports", JSON.stringify(updatedReports));
    
    toast({
      title: "Report Removed",
      description: "The report has been removed"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4 bg-[#f5f5f5]"
    >
      <ScrollArea className="h-[calc(100vh-100px)]">
        <div className="max-w-7xl mx-auto py-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">ADM Reports</h1>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">Upload New Report</h2>
              <Input
                placeholder="Report Name"
                value={newReportName}
                onChange={(e) => setNewReportName(e.target.value)}
                className="mb-2"
              />
              <Input
                placeholder="Report Link"
                value={newReportLink}
                onChange={(e) => setNewReportLink(e.target.value)}
                className="mb-4"
              />
              <Button
                className="w-full"
                onClick={() => handleUpload(newReportName)}
                disabled={!newReportLink || !newReportName}
              >
                Upload Report
              </Button>
            </div>

            <div className="w-full max-w-md space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Uploaded Reports</h2>
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white p-4 rounded-lg shadow-sm space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">{report.name}</h3>
                      <a
                        href={report.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 break-all"
                      >
                        {report.link}
                      </a>
                      <p className="text-sm text-gray-500">
                        Uploaded: {new Date(report.uploadedAt).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveReport(report.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default Adm;