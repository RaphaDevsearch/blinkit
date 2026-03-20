type ButtonProps = {
  label: string;
};

export function Button({label}: ButtonProps) {
  return (
    <button className="px-4 py-2 rounded bg-gray-100">{label}</button>
  )
}