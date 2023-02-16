import Intro from './component/Intro';
import Experience from './component/Experience'
import Skills from './component/Skills.jsx'
import Hobbies from './component/Hobbies.jsx'

function App() {
  return (
    <div className="App">
      <Intro/>
      <hr/>
      <Experience/>
      <hr/>
      <Skills/>
      <hr />
      <Hobbies/>
    </div>
  );
}

export default App;
