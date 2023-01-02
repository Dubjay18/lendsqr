import React from "react";

export default function DropdownOption({ children, ...rest }:{children:React.ReactNode; onClick?:()=>void;}) {
  return (
    <div className="dropdown-option" {...rest}>
      {children}
    </div>
  );
}
