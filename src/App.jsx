import { useState } from 'react';

import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider url={'https://picsum.photos/v2/list'} />
    </>
  );
}

export default App;
