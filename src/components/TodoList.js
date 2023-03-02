import TodoItem from "./TodoItem";
export default function TodoList({ todo, toggle }) {
  return (
    <>
      {todo.map(({ text, status, id }) => (
        <>
          <TodoItem text={text} id={id} status={status} toggle={toggle} />
        </>
      ))}
    </>
  );
}
