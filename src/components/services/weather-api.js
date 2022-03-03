const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/";
//   "https://api.open-meteo.com/v1/";

async function FetchWithErrorHandling(url = "") {
  const response = await fetch(url, {
    // mode: "cors",
    // credentials: "include",
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchSearchWeather(latt, long) {
  console.log("latt in API:", latt);
  console.log("long in API:", long);
  return FetchWithErrorHandling(`${BASE_URL}?lattlong=${latt},${long}`);
  //   return FetchWithErrorHandling(
  //     `${BASE_URL}forecast?latitude=${latt}&longitude=${long}&hourly=temperature_2m&daily=weathercode`
  //   );
}

// https://www.metaweather.com/api/location/search/?query=london
