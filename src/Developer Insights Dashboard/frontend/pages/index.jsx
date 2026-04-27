import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Filters from "../components/Filters";
import Charts from "../components/Charts";

export default function Home() {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState("All");
  const [experience, setExperience] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchData(country, experience);
      setData(res);
    } catch (e) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [country, experience]);

  return (
    <div style={{ padding: 30 }}>
      <h1>Developer Insights Dashboard</h1>

      <Filters
        filters={data?.filters}
        setCountry={setCountry}
        setExperience={setExperience}
        disabled={loading}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <Charts data={data} />}
    </div>
  );
}
