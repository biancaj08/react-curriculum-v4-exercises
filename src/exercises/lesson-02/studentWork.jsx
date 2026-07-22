//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

import SnackApp from './SnackApp';
import { render } from 'react-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

export default function StudentWork() {
  return (
    <div>
      <p> Student output will go here</p>
    </div>
  );
}

render(<SnackApp />, root);
