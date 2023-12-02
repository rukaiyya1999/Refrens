import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SerchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [contextGender, setContextGender] = useState();
  const [contextStatus, setContextStatus] = useState();
  const [contextType, setContextType] = useState();

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        contextGender,
        setContextGender,
        contextStatus,
        setContextStatus,
        contextType,
        setContextType
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SerchContextProvider;
