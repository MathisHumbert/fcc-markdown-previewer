import React from 'react';
import ReactDOM from 'react-dom';
import { marked } from 'marked';
import './index.css';

marked.setOptions({
  breaks: true,
});

const App = () => {
  const renderer = new marked.Renderer();
  const [markdown, setMarkdown] = React.useState(`
  # H1
  ## H2 
  [title](https://www.example.com)
  
  code: \`<div></div>\`

code clock: 
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. First item
2. Second item
3. Third item

> Free Code Camp

**Free Code Camp**

![alt text](https://cdn.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg
)
  `);

  return (
    <main className="markdown">
      <textarea
        className="input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        id="editor"
      ></textarea>

      <article
        className="result"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer }),
        }}
      ></article>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
