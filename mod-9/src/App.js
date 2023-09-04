import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput.js";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  return (
    <div>
      <Header />
      <UserInput />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable />
    </div>
  );
}

export default App;
