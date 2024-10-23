import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export const WhatsappStatus = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: " Choose people who choose you. ",
      likes: "1200",
      liked: false,
    },
    {
      id: 2,

      text: " People come into our lives and you never know for how long.. ",
      likes: "100",
      liked: false,
    },
    {
      id: 3,

      text: " I might be okay but I'm not fine at all.. ",
      likes: "1300",
      liked: false,
    },
    {
      id: 4,

      text: " Just a year ago, things were so different.. ",
      likes: "1900",
      liked: false,
    },
    {
      id: 5,

      text: " Choose people who choose you. ",
      likes: "1200",
      liked: false,
    },
    {
      id: 6,

      text: " Choose people who choose you. ",
      likes: "800",
      liked: false,
    },
    {
      id: 7,

      text: " Just a year ago, things were so different.. ",
      likes: "1500",
      liked: false,
    },
    {
      id: 8,

      text: " Tell me how it feels to be loved back. ",
      likes: "1700",
      liked: false,
    },
    {
      id: 9,

      text: " ਚਿਹਰੇ ਉੱਤੇ ਰੱਖਕੇ ਹਾਸੇ ਜ਼ਿੰਦਗੀ ਜਿਉਣਾਂ ਸਿੱਖਗੇ ਆਂ ❤️‍🩹🖤.. ",
      likes: "1200",
      liked: false,
    },
    {
      id: 10,

      text: " ਸਾਫ ਜਿਹੀ ਜ਼ਿੰਦਗੀ ਜੀਉਨੇ ਆ.. ਨਾ ਚਾਲ ਤੇ ਨਾਲ ਕੋਈ ਲਾਰਾ ਏ 😊😊.. ",
      likes: "500",
      liked: false,
    },
    {
      id: 11,

      text: " ਅਸੂਲਾਂ ਦੀ ਜਿੰਦਗੀ 👍ਜਿਉਣੇ ਆਂ ਮਿੱਤਰਾ ਤਗੜਾ ਜਾਂ ਮਾੜਾ ਦੇਖ ਕਦੇ 💪 ਬਦਲੇ ਨੀ. ",
      likes: "12000",
      liked: false,
    },
    {
      id: 12,

      text: " ✌सहारे ढूंढ़ने की Adat नहीं हमारी🚫 😎हम Akele पूरी महफिल के बराबर हैं👑. ",
      likes: "1900",
      liked: false,
    },
    {
      id: 13,

      text: " ਅਸੂਲਾਂ ਦੀ ਜਿੰਦਗੀ 👍ਜਿਉਣੇ ਆਂ ਮਿੱਤਰਾ ਤਗੜਾ ਜਾਂ ਮਾੜਾ ਦੇਖ ਕਦੇ 💪 ਬਦਲੇ ਨੀ. ",
      likes: "1300",
      liked: false,
    },
    {
      id: 14,

      text: " ਚਿਹਰੇ ਉੱਤੇ ਰੱਖਕੇ ਹਾਸੇ ਜ਼ਿੰਦਗੀ ਜਿਉਣਾਂ ਸਿੱਖਗੇ ਆਂ ❤️‍🩹🖤. ",
      likes: "1200",
      liked: false,
    },
    {
      id: 15,

      text: " ਸਾਫ ਜਿਹੀ ਜ਼ਿੰਦਗੀ ਜੀਉਨੇ ਆ.. ਨਾ ਚਾਲ ਤੇ ਨਾਲ ਕੋਈ ਲਾਰਾ ਏ 😊😊. ",
      likes: "1600",
      liked: false,
    },
    {
      id: 16,

      text: " ਚਿਹਰੇ ਉੱਤੇ ਰੱਖਕੇ ਹਾਸੇ ਜ਼ਿੰਦਗੀ ਜਿਉਣਾਂ ਸਿੱਖਗੇ ਆਂ ❤️‍🩹🖤. ",
      likes: "1200",
      liked: false,
    },
  ]);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleLike = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && !item.liked
          ? {
              ...item,
              likes: item.likes + 1,
              liked: true,
            }
          : item
      )
    );
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text); // Copy the text to clipboard
    setCopiedIndex(index); // Set the copied index to indicate the button was clicked

    // Reset after 2 seconds (change button text back to "Copy")
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="w-auto h-auto md:h-[789px] shadow-lg rounded-md bg-gray-300 md:mx-8 md:pt-8 absolute top-[670px] md:top-[520px] mx-auto p-4">
      <div className=" w-full h-[37px] text-center text-black mb-4">
        Latest WhatsApp Status
      </div>

      <div className="grid grid-cols-2  md:grid-cols-4 gap-4   w-full h-auto p-4 box-border">
        {items.map((item) => (
          <div key={item.id} className="flex justify-center h-min-[80px]">
            <div className="w-full max-w-[180px] md:max-w-[292px] h-auto md:h-[148px] bg-white p-4 rounded-lg shadow-md">
              {/* Text */}
              <p className="text-center text-sm md:text-md">{item.text}</p>

              {/* Button and Like */}
              <div className="flex justify-between items-center  md:mt-8">
                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item.text, item.id)}
                  className="bg-red-500 px-3 py-1 rounded-full text-white text-sm md:text-base transition duration-300 ease-in-out hover:bg-red-600"
                >
                  {copiedIndex === item.id ? "Copied" : "Copy"}
                </button>

                {/* Like Button and Count */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleLike(item.id)}
                    disabled={item.liked}
                    className="focus:outline-none"
                  >
                    {item.liked ? (
                      <FavoriteIcon className="text-red-500" />
                    ) : (
                      <FavoriteBorderOutlinedIcon className="text-red-500" />
                    )}
                  </button>
                  <p className="text-gray-700">{item.likes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
