import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const GP_LIST = {
  "Panskura-I": [
      "Mysora",
      "Keshapat",
      "Panskura",
      "Gobindanagar",
      "Ghoshpur",
      "Haur",
      "Chaitanyapur-I",
      "Chaitanyapur-II",
      "Pratappur-I",
      "Pratappur-II",
      "Radhaballavchak",
      "Purusottampur",
      "Raghunathbari",
      "Khandakhola",
    ],
    "Panskura-II": [
      "Brindabanchak",
      "Siddha-I",
      "Siddha-II",
      "Khanyadihi",
      "Baishnabchak",
      "Gopalnagar",
      "Kola-I",
      "Kola-II",
      "Pulsita",
      "Amalhanda",
      "Sagarbarh",
      "Bhogpur",
      "Dariachak",
    ],
    "Tamluk": [
      "Nilkunthia",
      "Bishnubar-I",
      "Bishnubar-II",
      "Pipulberia-I",
      "Pipulberia-II",
      "Uttar Sonamui",
      "Padumpur-II",
      "Anantapur-I",
      "Anantapur-II",
      "Padumpur-I",
      "Srirampur-I",
      "Srirampur-II",
    ],
    "Sahid Matangini": [
      "Santipur-I",
      "Santipur-II",
      "Balluk-I",
      "Balluk-II",
      "Raghunathpur-I",
      "Kharui-I",
      "Kharui-II",
      "Kakharda",
      "Dhalhara",
      "Raghunathpur-II",
    ],
    "Nandakumar": [
      "Dakshin Narikelda",
      "Bargodagodar",
      "Kumarchak",
      "Chak Simulia",
      "Byabattarhat Paschim",
      "Byabattarhat Purba",
      "Basudevpur",
      "Kumarara",
      "Kalyanpur",
      "Sitalpur Paschim",
      "Saoraberia Jalpai-I",
      "Saoraberia Jalpai-II",
    ],
    "Moyna": [
      "Gokulnagar",
      "Srikantha",
      "Tilkhoja",
      "Moyna-I",
      "Moyna-II",
      "Paramanandapur",
      "Ramchak",
      "Gojina",
      "Bakcha",
      "Naichanpur-I",
      "Naichanpur-II",
    ],
    "Chandipur": [
      "Jalpai",
      "Brindabanpur-I",
      "Brindabanpur-II",
      "Dibakarpur",
      "Nandapur Baraghuni",
      "Chowkhali",
      "Iswarpur",
      "Usmanpur",
      "Brajalalchak",
      "Kulbari",
    ],
    "Mahishadal": [
      "Amritberia",
      "Satish Samata",
      "Kismat Naikundi",
      "Itamogra-I",
      "Itamogra-II",
      "Garh Kamalpur",
      "Natsal-I",
      "Natsal-II",
      "Lakshya-I",
      "Lakshya-II",
      "Bet Kundu",
    ],
    "Sutahata": [
      "Ashadtalia",
      "Chaitanyapur",
      "Kukrahati",
      "Guaberia",
      "Horekhali",
      "Joynagar",
    ],
    "Nandigram-II": [
      "Boyal-I",
      "Boyal-II",
      "Khodambari-I",
      "Khodambari-II",
      "Birulia",
      "Amdabad-I",
      "Amdabad-II",
    ],
    "Nandigram-I": [
      "Bhekutia",
      "Mahammadpur",
      "Nandigram",
      "Haripur",
      "Kendamari Jalpai",
      "Daudpur",
      "Gokulnagar",
      "Samsabad",
      "Kalicharanpur",
      "Sonachura",
    ],
    "Haldia": [
      "Bar Uttarhingly",
      "Deulpota",
      "Chakdwipa",
      "Debhog",
    ],
    "Bhagwanpur-I": [
      "Mahammadpur-I",
      "Mahammadpur-II",
      "Bhagwanpur",
      "Simulia",
      "Bibhisanpur",
      "Gurgram",
      "Benudia",
      "Kakra",
      "Kajlagarh",
      "Kotbarh",
    ],
    "Bhagwanpur-II": [
      "Garbari-I",
      "Arjunnagar",
      "Garbari-II",
      "Jukhia",
      "Baroj",
      "Radhapur",
      "Itaberia",
      "Basudevberia",
      "Mugberia",
    ],
    "Khejuri-I": [
      "Haria",
      "Lakshi",
      "Tikashi",
      "Birbandar",
      "Kamarda",
      "Kalagechhia",
    ],
    "Khejuri-II": [
      "Haludbari",
      "Baratala",
      "Khejuri",
      "Janka",
      "Nij-Kasba",
    ],
    "Contai-I": [
      "Badalpur",
      "Haipur",
      "Dulalpur",
      "Raipur P. Bar",
      "Mahishagot",
      "Sabajput",
      "Nayaput",
      "Majilapur",
    ],
    "Contai-II": [
      "Sarada",
      "Aurai",
      "Amtalia",
      "Dhobaberia",
      "Bamunia",
      "Chalti",
      "Basantia",
      "Dariapur",
    ],
    "Deshapran": [
      "Debendra",
      "Bhaja Chaulia",
      "Kusumpur",
      "Lauda",
      "Kumirda",
      "Kanaidighi",
      "Marishda",
      "Durmuth",
    ],
    "Ramnagar-I": [
      "Badhia",
      "Haldia-I",
      "Haldia-II",
      "Talgachhari-I",
      "Basantapur",
      "Gobra",
      "Padima-I",
      "Padima-II",
      "Talgachhari-II",
    ],
    "Ramnagar-II": [
      "Paldhui",
      "Depal",
      "Kadua",
      "Maithana",
      "Badalpur",
      "Satilapur",
      "Balisai",
      "Kalindi",
    ],
    "Egra-I": [
      "Barida",
      "Kasba Egra",
      "Chatri",
      "Jerthan",
      "Panchrol",
      "Sahara",
      "RBC",
      "Jumki",
    ],
    "Egra-II": [
      "Paniparul",
      "Dubda",
      "Sarbodaya",
      "Basudevpur",
      "Deshbandhu",
      "Bathuary",
      "Vivekananda",
      "Manjushree",
    ],
    "Patashpur-I": [
      "Gokulpur",
      "Naipur",
      "Gopalpur",
      "Brajalalpur",
      "Amarshi-I",
      "Amarshi-II",
      "Chistipur-I",
      "Chistipur-II",
      "Barhat",
    ],
    "Patashpur-II": [
      "South Khanda",
      "Argoal",
      "Mathura",
      "Khar",
      "Panchet",
      "Patashpur",
      "Srirampur",
    ],
};

const GPList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">GP List</h1>
      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <div className="space-y-6 p-4">
          {Object.entries(GP_LIST).map(([block, gps]) => (
            <div key={block} className="space-y-2">
              <h2 className="text-xl font-semibold text-blue-600">{block}</h2>
              <div className="space-y-2 pl-4">
                {gps.map((gp, index) => (
                  <Button
                    key={index}
                    className="w-full text-left justify-start text-lg p-6"
                    variant="outline"
                    onClick={() => navigate(`/village-list/${index + 1}`)}
                  >
                    {gp}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GPList;