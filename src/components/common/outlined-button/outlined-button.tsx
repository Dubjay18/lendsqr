import React from "react";
import "./_outlined-button.scss";

export default function OutlinedButton({ className, children, ...rest }:{className?:string;children?:React.ReactNode;onClick?: (e:any)=>void;}) {
  return (
    <button className={`${className} outlined-btn`} {...rest}>
      {children}
    </button>
  );
}
