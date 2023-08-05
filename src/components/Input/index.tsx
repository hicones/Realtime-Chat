"use client";
import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IconType } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "left" | "right";
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  Icon?: IconType;
  disabled?: boolean;
  onClick?: () => void;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  handleClick?: () => void;
  label?: string;
  width?: string;
  bg?: string;
}

export const Input = ({
  labelPosition,
  handleClick,
  Icon,
  onClick,
  type,
  isError,
  register,
  disabled,
  errorMessage,
  label,
  id,
  width,
  bg = "#000",
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    if (!disabled) {
      setShowPassword((state) => !state);
    }
  };
  return (
    <div
      style={{
        width: width ? width : "",
      }}
      className="flex flex-col w-full gap-2"
    >
      <div
        data-focus={isFocused}
        data-error={isError}
        data-disabled={disabled}
        className={`relative ring-1 ring-gray-600 p-4 rounded-[4px] data-[error=true]:ring-red-300 data-[focus=true]:ring-indigo-600 transition flex items-center space-x-1 data-[disabled]:opacity-40 bg-inherit `}
      >
        {label && (
          <label
            data-focus={isFocused}
            data-error={isError}
            data-bg={true}
            htmlFor={id}
            className={`text-gray-200 absolute bottom-[calc(100%-0.375rem)] left-4 text-xs text-gray-30 font-normal track px-1 bg-slate-900 data-[bg=true]:bg-slate-900  data-[focus=true]:text-indigo-200 data-[error=true]:text-red-300`}
          >
            {label}
          </label>
        )}
        {Icon && labelPosition === "left" ? (
          <label htmlFor={id} onClick={onClick}>
            <Icon
              data-click={onClick}
              className={`w-6 h-6 text-gray-100 data-[click]:cursor-pointer`}
            />
          </label>
        ) : null}
        <input
          type={
            type === "password" && !showPassword
              ? type
              : type === "password" && showPassword
              ? "text"
              : type
          }
          onClick={handleClick}
          id={id}
          data-error={isError}
          className="input-style placeholder-gray-80 text-gray-30 text-base font-normal appearance-none w-full data-[error=true]:text-red-300 bg-inherit"
          disabled={disabled}
          {...register}
          {...rest}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isError ? <TbAlertCircle className="w-6 h-6 text-red-300" /> : null}
        {showPassword && type === "password" ? (
          <AiOutlineEye
            onClick={handleShowPassword}
            className="w-6 h-6 cursor-pointer text-gray-100"
          />
        ) : !showPassword && type === "password" ? (
          <AiOutlineEyeInvisible
            onClick={handleShowPassword}
            className="w-6 h-6 cursor-pointer text-gray-100"
          />
        ) : null}
        {Icon && labelPosition === "right" && !isError ? (
          <label htmlFor={id} onClick={onClick}>
            <Icon
              data-click={onClick}
              className={`w-6 h-6 text-gray-100 data-[click]:cursor-pointer`}
            />
          </label>
        ) : null}
      </div>
      {isError ? (
        <p className="font-bold text-xs text-red-300">{errorMessage}</p>
      ) : null}
    </div>
  );
};
