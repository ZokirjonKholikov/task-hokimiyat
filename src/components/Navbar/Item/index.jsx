import React from "react";

export default ({ name, href }) => (
  <li className="mr-3 py-2 lg:py-0">
    <a
      className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
      href={href}
    >
      {name}
    </a>
  </li>
);
