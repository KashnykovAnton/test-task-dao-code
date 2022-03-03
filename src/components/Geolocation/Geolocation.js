import { useState, useEffect } from "react";
import { fetchSearchWeather } from "../services/weather-api";

function Geolocation() {
  const [latt, setLatt] = useState(null);
  const [long, setLong] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatt(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    fetchSearchWeather(latt, long)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latt, long]);

  // componentDidMount() {
  //     if ("geolocation" in navigator) {
  //       console.log("Available");
  //     } else {
  //       console.log("Not Available");
  //     }
  //   }

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {latt && <p>Latitude: {latt}</p>}
      {long && <p>Longitude: {long}</p>}
    </div>
  );
}

export default Geolocation;
