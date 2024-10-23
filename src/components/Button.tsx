
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button 
    onClick={onClick}
    className="bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;