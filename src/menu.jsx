export const Menu = ({ IconComponent, text }) => {
  return (
    <>
      <a
        href="#"
        className="px-4 py-2 text-gray-800 hover:bg-red-300 hover:shadow-lg flex gap-2"
      >
        <IconComponent fontSize="13px" style={{ color: "black" }} />
        <p className="text-xs">{text}</p>
      </a>
    </>
  );
};
