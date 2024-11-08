import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "glass";
  fullWidth?: boolean;
  baseStyle?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  baseStyle = true,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = baseStyle ? "px-4 py-2 rounded-lg font-semibold transition" : "";

  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
    glass : "text-white bg-white bg-opacity-20 hover:bg-opacity-30"
  };

  return (
    <button
      {...props}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        fullWidth && "w-full",
        "flex items-center justify-center",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
