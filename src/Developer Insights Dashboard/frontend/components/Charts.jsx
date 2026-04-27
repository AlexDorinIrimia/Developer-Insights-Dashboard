import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { memo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

// 🎯 BAR CHART (with colors)
function toBarChart(obj, label) {
  const entries = Object.entries(obj || {}).filter(
    ([k, v]) => k && v != null
  );

  const colors = [
    "#4F46E5",
    "#06B6D4",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899"
  ];

  return {
    labels: entries.map(([k]) => k),
    datasets: [
      {
        label,
        data: entries.map(([, v]) => v),
        backgroundColor: entries.map((_, i) => colors[i % colors.length]),
        borderRadius: 6
      }
    ]
  };
}

// 🍩 PIE CHART (with colors)
function toPieChart(obj, label) {
  const entries = Object.entries(obj || {}).filter(
    ([k, v]) => k && v != null
  );

  const colors = [
    "#6366F1",
    "#22C55E",
    "#F97316",
    "#EF4444",
    "#3B82F6",
    "#A855F7",
    "#14B8A6"
  ];

  return {
    labels: entries.map(([k]) => k),
    datasets: [
      {
        label,
        data: entries.map(([, v]) => v),
        backgroundColor: colors.slice(0, entries.length),
        borderWidth: 1
      }
    ]
  };
}

// 🧱 Card wrapper
function ChartCard({ title, children }) {
  return (
    <div className="card" style={{ width: 500 }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// 📊 MAIN COMPONENT
function Charts({ data }) {
  if (!data) return null;

  return (
    <div className="chart-grid">

      <ChartCard title="🔥 Top Languages">
        <Bar data={toBarChart(data.top_languages, "Number of Users")}
        options={{
    plugins: {
      legend: {
        display: false
      }
    }
  }} />
      </ChartCard>

      <ChartCard title="👨‍💻 Top Roles">
        <Bar data={toBarChart(data.top_roles, "Number of Developers")}
        options={{
    plugins: {
      legend: {
        display: false
      }
    }
  }} />
      </ChartCard>

      <ChartCard title="🌍 Countries">
        <Pie data={toPieChart(data.countries, "Developers per Country")} />
      </ChartCard>

      <ChartCard title="🏠 Remote Work">
        <Pie data={toPieChart(data.remote_work, "Work Type Distribution")} />
      </ChartCard>

    </div>
  );
}

export default memo(Charts);