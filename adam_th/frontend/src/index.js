import React from 'react';
import ReactDOM from 'react-dom';
import Crapp from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Crapp />, document.getElementById('root'));
registerServiceWorker();
