import React from "react";
import "./_card.scss";

export default function Card({ children, className }:{children:React.ReactNode; className?: string;}) {
  return <div className={`card ${className ? className : ""}`}>{children}</div>;
}
