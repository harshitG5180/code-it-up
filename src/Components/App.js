import React, { useState , useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [HTML, setHTML] = useLocalStorage('HTML', '');
  const [CSS, setCSS] = useLocalStorage('CSS', '');
  const [JS, setJS] = useLocalStorage('JS', '');
  const [srcDoc , setsrcDoc] = useState('');

  // useEffect(<function>, <dependency>)
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setsrcDoc(`
      <html>
      <body> ${HTML}</body>
      <style> ${CSS}</style>
      <script> ${JS}</script>
      </html>
    `)
    } , 250)

    return () => clearTimeout(timeout);
  } ,[HTML , CSS , JS])


  return (
    <>
      <div className="pane top-pane">
        <Editor
          language='xml'
          displayName='HTML'
          value={HTML}
          onChange={setHTML}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={CSS}
          onChange={setCSS}
        />
        <Editor
          language='javascript'
          displayName='Javascript'
          value={JS}
          onChange={setJS}
        />

      </div>
      <div className="pane">
        {/*  iframe is used to display a web page within a web page. */}
        <iframe
          srcDoc={srcDoc}
          title="output"
          width="100%"
          height="100%"
          sandbox="allow-scripts"
          style={{ border: "0px" }}
        />
        {/* sandbox -> used to apply restrictions */}
      </div>
    </>
  );
}

export default App;
