import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./_paginate.scss";
import { scrollToTop } from "../../utils/helper";

//icons
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

export default function Paginate({ pageCount, changeData, perPage }:{pageCount?:number;changeData?:Function;perPage?:number;}) {
  const [currentPage, setCurrentPage] = useState(0);

  const indexedDb =
    window.indexedDB

  var db: any = null;

  var request = indexedDb.open("usersDB", 1);
  request.onerror = function (event) {
    console.log("Error opening database");
  };
  request.onsuccess = function (event:any) {
    db = event.target.result;
  };

  var counter = 0;
  var limit = perPage;

  const handlePageClick = (event:any) => {
    // setCurrentPage(event.selected);
    setCurrentPage(Math.ceil(event.selected));
    nextPage(event.selected);
  };

  const nextPage = (pageNo?:number) => {
    var advanced = false;
    var nextPageArr: any[] = [];
    db
      .transaction("usersDB", "readwrite")
      .objectStore("usersDB")
      .openCursor().onsuccess = function (event:any) {
      var cursor = event.target.result;

      if (!cursor) {
        return;
      }

      if (!advanced) {
        advanced = true;
        console.log(pageNo);
        if(limit)
        if(pageNo)
        if (pageNo > 0) {
          cursor.advance(pageNo * limit);
        }
        return;
      }

      if (cursor) {
        var value = cursor.value;
        console.log(value);
        nextPageArr.push(value);

        counter++;
        if(limit)
        if (counter < limit) {
          cursor.continue();
        } else {
          if(changeData)
          changeData(nextPageArr);
        }
      }
    };
  };

  return (
    <> 
    {pageCount &&
    <ReactPaginate
    marginPagesDisplayed={2}
    breakLabel="..."
    onPageChange={(event) => {
      handlePageClick(event);
    }}
    nextLabel={
      <button
        className="paginate-button next"
        onClick={() => {
          nextPage();
        }}
      >
        <NextIcon />
      </button>
    }
    pageCount={pageCount}
    previousLabel={
      <button className="paginate-button previous">
        <NextIcon />
      </button>
    }
    
    forcePage={currentPage}
    containerClassName="pagination"
    pageClassName="paginate-item"
    activeClassName="active"
  />}
     </>
   
  );
}
