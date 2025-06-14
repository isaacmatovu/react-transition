interface ButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, isActive, onClick } = props;
  return (
    <div>
      <button className={isActive ? "active" : "normal"} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
