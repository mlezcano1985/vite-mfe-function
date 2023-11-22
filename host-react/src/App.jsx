import { useEffect, useRef, useState } from "react";
import "./App.css";
import vueRender from "remoteVue/render";
import VueCounter from "remoteVue/Counter";

function App() {
  const vueRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    vueRender(VueCounter, vueRef.current);
  }, []);

  const increment = (e) => setCount(e.detail.count);

  useEffect(() => {
    document.addEventListener("INCREMENT", increment);
    return () => document.removeEventListener("INCREMENT", increment);
  }, []);

  return (
    <>
      <h1>React Container {count}</h1>
      <div ref={vueRef}></div>
    </>
  );
}

export default App;
