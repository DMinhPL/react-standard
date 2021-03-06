import React from 'react';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => (
    <div className="a-button">
        <button>{children}</button>
    </div>
);

export default Button;
