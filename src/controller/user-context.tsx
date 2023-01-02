import React, {
    useState,
    useMemo,
    useEffect,
    createContext,
    useCallback,
    useLayoutEffect,
  } from "react";
  
  export interface IUsercontext {
    usersList?: any[];
    setUsersList?:Function;
    perPage?: number;
    setPerPage?: Function;
    currentPage?: number;
    setCurrentPage?: Function;
    totalCount?: number;
    setTotalCount?: Function;

  }
  export const UsersListContext = createContext<IUsercontext>({});
  
  function UsersListController({ children }:{children: React.ReactNode}) {
    const [usersList, setUsersList] = React.useState<any>([]);
    const [perPage, setPerPage] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalCount, setTotalCount] = React.useState(0);
  
    return (

      <UsersListContext.Provider
        value={{
          usersList,
          setUsersList,
          perPage,
          setPerPage,
          currentPage,
          setCurrentPage,
          totalCount,
          setTotalCount,
        }}
      >
        {children}
      </UsersListContext.Provider>
    );
  }
  
  export default UsersListController;
  