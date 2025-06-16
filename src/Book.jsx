import "./App.css";

export default function Book({ id, img, title, author, getBook, index }) {
  const getOneBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <h4>{index}</h4>
      <img src={img} alt="Failed to fetch image" />
      <h4>{title}</h4>
      <h4>{author}</h4>
      <button onClick={getOneBook}>Favourite</button>
    </article>
  );
}
