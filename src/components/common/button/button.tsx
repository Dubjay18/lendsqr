import React from "react";
import "./_button.scss";

export default function FillButton({ className, children, ...rest } : {className?: string; children: React.ReactNode; type?: any; disabled?: boolean;}) {
  return (
    <button className={`${className} btn`} {...rest}>
      {children}
    </button>
  );
}
