export default function Filters({
  filters,
  setCountry,
  setExperience,
  country,
  experience,
  disabled
}) {
  if (!filters) return null;

  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <select
        disabled={disabled}
        value={country || ""}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">All countries</option>
        {filters.countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        disabled={disabled}
        value={experience || ""}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">All experience</option>
        {filters.experience.map((e) => (
          <option key={e} value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}