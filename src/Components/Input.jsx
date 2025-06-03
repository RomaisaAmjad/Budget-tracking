function Input({ label, id, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col justify-start mt-3 flex-1 min-w-0">
      <label htmlFor={id} className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md text-sm p-1 bg-gray-200 focus:outline-none"
      />
    </div>
  );
}

export default Input;
