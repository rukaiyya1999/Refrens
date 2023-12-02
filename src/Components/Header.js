import React, { useContext, useState } from "react";
import SearchContext from "../Context/SearchContext";

function Header() {
  //States
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();

  //Context
  const { setSearch, setContextGender, setContextType, setContextStatus } =
    useContext(SearchContext);

  //Function To handle Search
  const handleSubmit = () => {
    setSearch(searchTerm);
  };

  //Function To handle Filters
  const handleFilter = () => {
    setContextGender(gender);
    setContextStatus(status);
    setContextType(type);
  };
  return (
    <div
      style={{
        height: "20%",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h1>Ricky And Morty</h1>
      </div>

      <div style={{ display: "flex" }}>
        <input
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "8px",
            fontSize: "14px",
            outline: "none",
          }}
          type="text"
          placeholder="Serch here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            outline: "none",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <div>
        <select
          style={{
            height: "40px",
            padding: "8px",
            fontSize: "14px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
          onChange={(e) => setGender(e.target.value)}
        >
          <option selected disabled>
            Select Gender:
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>

        <select
          style={{
            height: "40px",
            padding: "8px",
            fontSize: "14px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option selected disabled>
            Select Status:
          </option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
        </select>

        <select
          style={{
            height: "40px",
            padding: "8px",
            fontSize: "14px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
          onChange={(e) => setType(e.target.value)}
        >
          <option selected disabled>
            Select Type:
          </option>
          <option value="human">Human</option>
          <option value="Superhuman">Superhuman (Ghost trains summoner)</option>
          <option>Parasite</option>
          <option value="clone">Clone</option>
        </select>
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            outline: "none",
          }}
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default Header;
