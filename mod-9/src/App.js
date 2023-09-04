import Header from "./components/Header/Header";
import Form from "./components/UserInput/Form";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  return (
    <div>
      <Header />
      <Form />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable />
    </div>
  );
}

export default App;
