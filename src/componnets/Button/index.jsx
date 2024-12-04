const Button = ({ onClick, btnText }) => {
  return (
    <button
      className=" w-full h-10 bg-emerald-600 rounded-md mt-4 text-lg font-semibold text-white justify-center flex items-center cursor-pointer hover:bg-emerald-400 transition hover:text-emerald-900
  "
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
