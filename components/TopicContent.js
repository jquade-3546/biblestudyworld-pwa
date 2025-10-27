export default function TopicContent({ topic }) {
  const linkifyBibleRefs = text => {
    const pattern = /([1-3]?\s?[A-Za-z]+)\s+(\d+):(\d+(-\d+)?)/g;
    return text.replace(pattern, (match, book, chapter, verse) => {
      const url = `https://www.biblestudyworld.com/default.asp?st=${encodeURIComponent(book + " " + chapter + ":" + verse)}`;
      return `<a href="${url}" target="_blank">${match}</a>`;
    });
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: linkifyBibleRefs(topic.content).replace(/\n/g, "<br>") }} />
  );
}
