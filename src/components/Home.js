import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import Navbar from "./Navbar";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {


  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 500)
    return () => clearTimeout(timeout)
  }, [html, css, js])


  return (
    <>
      <Navbar/>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default Home;