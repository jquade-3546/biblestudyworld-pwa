export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search topics..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      style={{ padding: "8px", width: "100%", marginBottom: "15px", borderRadius: "5px" }}
    />
  );
}
