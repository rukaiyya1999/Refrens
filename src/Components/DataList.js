import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../Context/SearchContext";
import axios from "axios";
import { Link } from "react-router-dom";
function DataList() {
  //States
  const [data, setData] = useState([]);

  //Context
  const { search, contextGender, contextStatus, contextType } =
    useContext(SearchContext);

  useEffect(() => {
    getData();
  }, [search, contextGender, contextStatus, contextType]);

  const getData = async () => {
    try {
      //Set Filters to Filter Data Accordingly
      const genderFilter = `gender= ${
        contextGender !== undefined ? contextGender : ""
      }`;
      const statusFilter = `status= ${
        contextStatus !== undefined ? contextStatus : ""
      }`;
      const typeFilter = `type= ${
        contextType !== undefined ? contextType : ""
      }`;

      let response = await axios.get(
        `https://rickandmortyapi.com/api/character?${genderFilter}&${statusFilter}&${typeFilter}`
      );
      if (response?.data?.results) {
        if (search === null) {
          setData(response?.data?.results);
        } else {
          //aply filter on searched data
          const filteredData = response?.data?.results.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
          setData(filteredData);
        }
      } else {
        console.log("No data found");
        setData([]);
      }
      //If no search filter then show all data
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.length === 0 ? (
          <p style={{ fontSize: "50px", margin: "auto" }}>No results found.</p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid grey",
                borderRadius: "5px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={item.image} />
              <h4>{item.name}</h4>
              <div>{item.status}</div>
              <div>{item.location.name}</div>
              <Link to={`profile/${item.id}`} state={{ item }}>
                <button
                  style={{
                    margin: "20px",
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  Show Profile
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DataList;
