import { useState, useEffect } from "react";
import TopicList from "../components/TopicList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState("alpha");

  useEffect(() => {
    fetch("/data/topics.json")
      .then(res => res.json())
      .then(data => setTopics(data));
  }, []);

  const sortedTopics = [...topics].sort((a, b) => {
    if (sortMode === "alpha") return a.title.localeCompare(b.title);
    return new Date(b.date) - new Date(a.date);
  });

  const filteredTopics = sortedTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Study Topics</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setSortMode("alpha")} style={{ marginRight: "5px", background: sortMode === "alpha" ? "#2a4d9c" : "#eee", color: sortMode === "alpha" ? "#fff" : "#333", padding: "6px 12px", borderRadius: "5px" }}>A–Z</button>
        <button onClick={() => setSortMode("date")} style={{ background: sortMode === "date" ? "#2a4d9c" : "#eee", color: sortMode === "date" ? "#fff" : "#333", padding: "6px 12px", borderRadius: "5px" }}>Newest</button>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TopicList topics={filteredTopics} searchTerm={searchTerm} />
    </div>
  );
}
