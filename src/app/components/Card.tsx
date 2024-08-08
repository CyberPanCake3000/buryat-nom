import React, { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Card;