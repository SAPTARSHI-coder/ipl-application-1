import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/Loader";

export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (err) {
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };

    fetchPointsTable();
  }, []);
  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl text-bold mb-6">Points Table</h3>
    </div>
  );
}
