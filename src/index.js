import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './index.css';

const App = () => {
  const [markdown, setMarkdown] = React.useState('');

  return (
    <main>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
