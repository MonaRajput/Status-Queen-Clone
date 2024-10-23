import CreateIcon from "@mui/icons-material/Create";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CakeIcon from "@mui/icons-material/Cake";

const data = [
  {
    id: 1,
    icon: <InsertPhotoIcon className="text-white" fontSize="large" />,
    text: " ƊƤ IMAƓƐS ",
    gradient: "from-blue-400 via-blue-300 to-blue-200",
  },
  {
    id: 2,
    icon: <InsertPhotoIcon className="text-white" fontSize="large" />,
    text: " IMAƓƐ SƬAƬUS ",
    gradient: "from-green-400 via-green-300 to-green-200",
  },
  {
    id: 3,
    icon: <CreateIcon className="text-white" fontSize="large" />,
    text: " ƬƐXƬ SƬAƬUS ",
    gradient: "from-pink-400 via-pink-300 to-pink-200",
  },
  {
    id: 4,
    icon: <CakeIcon className="text-white" fontSize="large" />,
    text: " ƁIRƬHƊAƳ ƜISHƐS ",
    gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
  },
  {
    id: 5,
    icon: <CreateIcon className="text-white" fontSize="large" />,
    text: " Quotes ",
    gradient: "from-blue-400 via-blue-300 to-blue-200",
  },
  {
    id: 6,
    icon: <InsertPhotoIcon className="text-white" fontSize="large" />,
    text: " MOƁILƐ ƜALLƤAƤƐR ",
    gradient: "from-green-400 via-green-300 to-green-200",
  },
  {
    id: 7,
    icon: <InsertPhotoIcon className="text-white" fontSize="large" />,
    text: " ƊƐSƘƬOƤ ƜALLƤAƤƐR ",
    gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
  },
  {
    id: 8,
    icon: <CakeIcon className="text-white" fontSize="large" />,
    text: " ƑƐSƬIƲAL ƜISHƐS ",
    gradient: "from-pink-400 via-pink-300 to-pink-200",
  },
];

export const WhatsappImage = () => {
  return (
    <>
      <div className="w-auto h-auto p-4 md:pt-[95px] m-4 mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div
                className={`w-full max-w-[160px] h-auto md:max-w-[250px] md:h-[164px] rounded-lg bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center p-4 shadow-md`}
              >
                <a href="#" className="text-center">
                  {/* Icon */}
                  <div className="text-2xl md:text-4xl mb-2">{item.icon}</div>

                  {/* Text */}
                  <div className="text-xs md:text-lg font-semibold text-gray-800">
                    {item.text}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
