import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
  styles?: string;
  variant?: string;
}

export const Button = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, variant, ...rest } = props;
  switch (variant) {
    case "primary":
      return <ButtonPrimary {...props} />;
    case "custom":
      return <ButtonCustom {...props} />;
    case "noButtonPrimary":
      return <NoButtonPrimary {...props} />;
  }

  return <ButtonPrimary {...props} />;
};

export const ButtonPrimary = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <button
      style={{
        width: size ? size : "130px",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`text-gray-200 flex justify-center disabled:cursor-not-allowed disabled:opacity-30 items-center p-4 bg-indigo-600 rounded font-semibold text-sm gap-2 hover:brightness-75 ease-in duration-200 ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const NoButtonPrimary = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <span
      style={{
        width: size ? size : "130px",
      }}
      onClick={onClick}
      className={`cursor-pointer flex justify-center disabled:cursor-not-allowed disabled:opacity-30 items-center p-4 bg-indigo-600 rounded font-semibold text-sm gap-2 hover:brightness-75 ease-in duration-200 ${styles}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export const ButtonCustom = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <button
      style={{
        width: size ? size : "130px",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center disabled:cursor-not-allowed disabled:opacity-30 items-center p-4 rounded font-semibold text-sm gap-2 hover:brightness-75 ease-in duration-200 ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
};
