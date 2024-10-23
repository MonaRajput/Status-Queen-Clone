const dpImages = [
  {
    id: 1,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 2,
    image: "/public/little_krishna_dp_img2.jpg",
  },
  {
    id: 3,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 4,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 5,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 6,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 7,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 8,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 9,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 10,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 11,
    image: "/public/little_krishna_dp.jpg",
  },
  {
    id: 12,
    image: "/public/Mahadev_Dp.jpg",
  },
];

export const DpImages = () => {
  return (
    <>
      <div className="bg-gray-300 absolute md:top-[1400px] top-[1950px] w-auto h-auto md:h-auto shadow-lg rounded-md  md:mx-8 md:pt-8">
        <div className="bg-gray-300 w-full h-[37px] text-center text-black mb-4">
          LATEST DP IMAGES
        </div>

        <div className="grid grid-cols-3  md:grid-cols-6 gap-4   w-full h-auto p-4 box-border">
          {dpImages.map((item) => (
            <div key={item.id}>
              <div className="shadow-md">
                <img src={item.image} alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
