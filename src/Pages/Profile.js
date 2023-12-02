import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
function Profile() {
  const [episodes, setEpisodes] = useState([]);
  const [locationData, setLocationData] = useState({});
  let { state } = useLocation();
  const { item } = state;

  useEffect(() => {
    getCharacterData();
    getEpisodeName();
  }, []);

  const Location_URL = item.location.url;
  const getCharacterData = async () => {
    const response = await axios.get(Location_URL);
    setLocationData(response.data);
  };

  const getEpisodeName = async () => {
    const names = await Promise.all(
      item.episode.map(async (url) => {
        const response = await axios.get(url);
        return response.data.name;
      })
    );
    setEpisodes(names);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "wheat",
        height: "100vh",
      }}
    >
      <div>
        <h1>{item.name}</h1>
        <img src={item.image} />
        <div>
          <div>
            <span style={{ fontWeight: "bold" }}>Species : </span>
            {item.species}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Gender : </span>
            {item.gender}
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "bold" }}>Location Data : </span>
            <div>
              <span style={{ fontWeight: "bold" }}>Name : </span>
              {locationData.name}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Dimension : </span>{" "}
              {locationData.dimension}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Amount Of Residence : </span>
              {locationData.residents && locationData.residents.length}
            </div>
          </div>
        </div>
        <Link to = '/'>
        <button
          style={{
            marginTop : '20px',
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
          Go Back
        </button>
        </Link>
      </div>

      <div>
        <h1>Episodes</h1>
        {episodes.map((episode) => (
          <ul>
            <li>{episode}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Profile;
