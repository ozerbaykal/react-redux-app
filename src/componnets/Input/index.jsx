const Input = ({ type, id, name, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        className="h-10 w-full  border rounded-md outline-none p-2 mt-3 "
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
