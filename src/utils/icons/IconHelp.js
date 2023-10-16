// icon:help | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconHelp(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.2rem"
      width="1.2rem"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
      <path d="M12 17v.01M12 13.5a1.5 1.5 0 011-1.5 2.6 2.6 0 10-3-4" />
    </svg>
  );
}

export default IconHelp;
