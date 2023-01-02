import React from "react";
import Card from "../common/card/card";
import Select from "../common/select/select";
import "./_table.scss";
import { convertToOptions } from "../../utils/form";
import Paginate from "../paginate/paginate";
import { IUsercontext } from "../../controller/user-context";

const Table = ({
  children,
  tableProps,
  changeData,
  className,
  ...rest
}: {
  children: React.ReactNode;
  tableProps: IUsercontext;
  className: string;
  changeData: (data: any) => void;
}) => {
  const { setPerPage, totalCount, perPage } =
    tableProps || {};

  const handlePerPageChange = (val: { value: string }) => {
    if (val) {
      if (setPerPage) setPerPage(val.value);
    }
  };
  return (
    <div className='table-container'>
      <Card>
        <table {...rest}>{children}</table>
      </Card>

      <div className='table-selection-details'>
        <div className='pageination-container'>
          {totalCount && perPage && (
            <Paginate
              changeData={changeData}
              perPage={perPage}
              pageCount={Math.ceil(totalCount / perPage)}
            />
          )}
        </div>

        <div className='current-count'>
          Showing{" "}
          <span>
            <Select
              options={convertToOptions({
                data: [10, 25, 50],
              })}
              defaultValue={convertToOptions({
                data: [10],
              })}
              onChange={(val) => {
                handlePerPageChange(val);
              }}
            />
          </span>{" "}
          out of {totalCount}
        </div>
      </div>
    </div>
  );
};

export default Table;
