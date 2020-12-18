import Header from './components/header/index';
import Headline from './components/headline/index';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section class="main">
        <Headline header="Posts" desc="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
