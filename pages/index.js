import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/Joker';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });
    setButton('Get Punchline');
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
      <Joker joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke'
        ? <button type="button" onClick={getAJoke}>{btnText}</button>
        : <button type="button" onClick={() => setButton('Get Another Joke')}>{btnText}</button>}
    </div>
  );
}

export default Home;
