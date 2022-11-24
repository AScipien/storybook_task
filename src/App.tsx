import './App.css';
import Card from './components/card/Card';
import { image_flower_4 } from './utils/images';

function App() {
  return (
    <div className="App">
      <Card>
        <div className="image_size_s">
          {image_flower_4}
          <p>Please run <strong>npm install</strong> and then <strong>npm run storybook</strong>.
            For more information go to <strong>README.md</strong></p>
        </div>
      </Card>

    </div>
  );
}

export default App;
