import React from 'react';
import clsx from 'clsx';

interface props {
  id?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password';
  name?: string;
  value?: string;
  placeholder?: string;
  pattern?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  maxLength?: number;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputText({
  id,
  type='text',
  name,
  value,
  placeholder,
  pattern,
  disabled,
  required,
  invalid,
  maxLength,
  readonly,
  onChange,
  className
}: props) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      required={required}
      aria-invalid={invalid}
      maxLength={maxLength}
      readOnly={readonly}
      onChange={onChange}
      className={clsx(
        className ? className : 'block w-full',
        'h-10 p-2 bg-white border border-antique-200 rounded-sm text-sm select-none',
        'text-antique-900 placeholder:italic placeholder:text-antique-500/50',
        'focus:outline-none focus:border-periwinkle-200 focus:ring-1 focus:ring-periwinkle-200',
        'disabled:opacity-50 disabled:bg-slate-100 disabled:placeholder:blur-[1px]',
        'invalid:border-pink-500 invalid:text-pink-600',
        'focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
      )}
    />
  );
}
