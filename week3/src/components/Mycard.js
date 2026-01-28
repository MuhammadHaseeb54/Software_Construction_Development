import React from 'react';

function Mycart({ icon: Icon, title, description, extra }) {
  return (
    <div className="bg-white text-black rounded-lg p-6 flex-1 min-w-[250px] max-w-[350px] flex flex-col items-center shadow-md">
      {Icon && <Icon className="text-4xl mb-2" />}
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4 text-center">{description}</p>
      <span className="text-xs text-gray-500">{extra}</span>
    </div>
  );
}

export default Mycart;