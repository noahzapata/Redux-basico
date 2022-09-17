import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import Input from './components/Input';
import { useSelector } from 'react-redux';

const buttonsArr = [
  {
    content: 'Increment',
    type: '@counter/increment',
  },
  {
    content: 'Decrement',
    type: '@counter/decrement',
  },
  {
    content: 'Multiply',
    type: '@counter/multiply',
  },
  {
    content: 'Divide',
    type: '@counter/divide',
  },
];

function App() {
  const numToCounter = useSelector((state) => state.numToCounter);
  return (
    <div className='App'>
      <Counter />
      <Input />
      {buttonsArr.map(({ type, content }) => (
        <Button key={content} type={type} payload={parseInt(numToCounter) || 2}>
          {content}
        </Button>
      ))}
    </div>
  );
}

export default App;
