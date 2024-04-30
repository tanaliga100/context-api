import { useAppContext } from "./context/AppContex";

function App() {
  const data = useAppContext();
  console.log("data", data);

  return (
    <>
      <h1>React Context + Reducer</h1>
    </>
  );
}

export default App;
