import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopicContent from "../components/TopicContent";
import Link from "next/link";

export default function TopicPage() {
  const router = useRouter();
  const { topic } = router.query;
  const [currentTopic, setCurrentTopic] = useState(null);

  useEffect(() => {
    if (topic) {
      fetch("/data/topics.json")
        .then(res => res.json())
        .then(data => {
          const t = data.find(item => item.id === topic);
          setCurrentTopic(t);
        });
    }
  }, [topic]);

  if (!currentTopic) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{currentTopic.title}</h1>
      <TopicContent topic={currentTopic} />
      <p><Link href="/">« Back to Topics</Link></p>
    </div>
  );
}
