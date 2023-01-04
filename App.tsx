import { createResouce, useState, React } from "./root";

const App = () => {
  const [name, setName] = useState("person");
  const [count, setCount] = useState(0);
  const dogPhotoUrl = createResouce(() => fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(payload => payload.message), 'dogPhoto');

  return (
    <div className="react-2020">
      <h1>Hello, {name}!</h1>
      <input value={name} onchange={e => setName(e.target.value)} type="text" placeholder="name" />
      <h2>The count is: {count}</h2>
      {dogPhotoUrl}
      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>
      <p>Yes</p>
    </div>
  );
};

export default App