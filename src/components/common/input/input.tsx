import React from "react";
import "./_input.scss";

export default function Input({ label, error, ...rest }: {label?: string; error?: any; type?:any; name?: string; placeholder?: string; onChange?: (e?:any)=>void; onBlur?: (e?:any)=>void; value?: string;}) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      <div className="input-field-container">
        <input {...rest} />
      </div>
    </div>
  );
}
