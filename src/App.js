import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./constants";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Quiz questions={jsQuizz.questions} />
    </div>
  );
}

export default App;
