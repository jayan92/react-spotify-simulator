import { useEffect } from "react";
import Login from "./components/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCase } from "./utils/Constants";
import Spotify from "./components/Spotify";

const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCase.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
