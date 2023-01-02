import React from "react";
import "./_select.scss";
import ReactSelect from "react-select";

interface IProps {
  label?:string;
  onChange?:(val:any)=>void;
  options?:any;
  placeholder?: string;
  defaultValue?:any;
  name?: string;
}
export default function Select(props: IProps) {
  return (
    <div className="input-container">
      {props.label && <label className="input-label">{props.label}</label>}

      <div className="input-field-container">
        <ReactSelect
          className="react-select_container"
          classNamePrefix="react-select"
          options={props.options}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </div>
  );
}
