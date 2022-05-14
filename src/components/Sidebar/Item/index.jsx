import React from "react";

const Item = ({ name, href }) => {
  return (
    <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
      <a
        href=" "
        className="pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
      >
        <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">
          {name}
        </span>
      </a>
      {/* {active ? (
        <a
          href=" "
          className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
        >
          <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">
            {name}
          </span>
        </a>
      ) : (
        <a
          href=" "
          className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
        >
          <span className="pb-1 md:pb-0 text-sm">{name}</span>
        </a>
      )} */}
    </li>
  );
};
export default Item;
