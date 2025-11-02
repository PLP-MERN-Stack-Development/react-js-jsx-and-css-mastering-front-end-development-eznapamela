import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default Card;
