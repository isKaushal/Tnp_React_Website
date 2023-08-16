export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  required,
  maxLength,
  minLength,
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${className} bg-white w-80`}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
}
