import { motion } from "framer-motion";
import { BDOLoginDialog } from "@/components/BDOLoginDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Subdivision = () => {
  const data = [
    {
      name: "CONTAI",
      blocks: [
        "BHAGWANPUR -II",
        "CONTAI -I",
        "CONTAI -III",
        "CONTAI MUNICIPALITY",
        "DESHAPRAN",
        "KHEJURI -I",
        "KHEJURI -II",
        "RAMNAGAR -I",
        "RAMNAGAR -II",
      ],
    },
    {
      name: "EGRA",
      blocks: [
        "BHAGWANPUR -I",
        "EGRA -I",
        "EGRA -II",
        "EGRA MUNICIPALITY",
        "PATASHPUR -I",
        "PATASHPUR -II",
      ],
    },
    {
      name: "HALDIA",
      blocks: [
        "HALDIA",
        "HALDIA MUNICIPALITY",
        "MAHISADAL",
        "NANDIGRAM -I",
        "NANDIGRAM -II",
        "SUTAHATA",
      ],
    },
    {
      name: "TAMLUK",
      blocks: [
        "CHANDIPUR",
        "KOLAGHAT",
        "MOYNA",
        "NANDAKUMAR",
        "PANSKURA -I",
        "PANSKURA MUNICIPALITY",
        "SAHID MATANGINI",
        "TAMLUK",
        "TAMLUK MUNICIPALITY",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold mb-8">Subdivisions</h1>

        <ScrollArea className="h-[calc(100vh-200px)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {data.map((subdivision) => (
              <div
                key={subdivision.name}
                className="border rounded-lg p-6 space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-4">{subdivision.name}</h2>
                <div className="space-y-2">
                  {subdivision.blocks.map((blockName) => (
                    <BDOLoginDialog
                      key={`${subdivision.name}-${blockName}`}
                      blockName={blockName}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default Subdivision;
