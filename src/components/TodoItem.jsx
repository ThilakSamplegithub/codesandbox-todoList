export default function TodoItem({ text, id, status, toggle }) {
  return (
    <>
      <div key={id} id={id}>
        <input className="checkBox" type="checkbox" /> {text}{" "}
        {status ? "completed" : "notYet"}
        <button onClick={() => toggle(id)}>toggle</button>
      </div>
    </>
  );
}
