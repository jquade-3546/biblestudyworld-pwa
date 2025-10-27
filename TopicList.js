import Link from "next/link";

export default function TopicList({ topics, searchTerm }) {
  return (
    <ul>
      {topics.map(topic => {
        const title = searchTerm
          ? topic.title.replace(new RegExp(searchTerm, "gi"), match => `<mark>${match}</mark>`)
          : topic.title;

        return (
          <li key={topic.id}>
            <Link href={`/${topic.id}`} dangerouslySetInnerHTML={{ __html: title }} />
            <span style={{ marginLeft: "10px", fontSize: "0.85em", color: "#666" }}>{topic.date}</span>
          </li>
        );
      })}
    </ul>
  );
}
