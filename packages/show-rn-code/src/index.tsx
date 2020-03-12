import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

export default (node?: React.FC) => {
    document.getElementById('root')?.remove()

    const root = document.createElement('div')
    root.id = 'root'

    document.body.appendChild(root)

    ReactDOM.render(<App
        target={node}
    />, root);
}



