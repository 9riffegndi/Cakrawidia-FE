import React from 'react';

const PrimaryButton = ({ label,src, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center text-primary justify-center btn-neutral rounded-full font-bold ${className}`}
    >
      {src && <img src={src} className="p-1" />}
      {label}
    </button>
  );
};

export default PrimaryButton;
