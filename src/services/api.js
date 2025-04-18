import axios from "axios";

const API_URL =
  "https://cricket-live-line1.p.rapidapi.com/series/336/pointsTable";
const HEADERS = {
  "x-rapidapi-key": "5b0a251e84mshd76bb45a825af3dp1b6c09jsneeb52836b0eb",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

export default async function getPointsTable() {
  const url = `${API_URL}/series/336/pointsTable`;

  try {
    const response = await axios.get(url, { headers: HEADERS });
    console.log("Response data:", response.data);

    return response.data.data.A.map((team) => ({
      team: team.T,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("Error fetching points table:", error);
    throw error;
  }
}
