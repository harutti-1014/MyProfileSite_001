import { useState, Fragment } from 'react';
import game_list from './GameData.jsx';

const images = import.meta.glob('./assets/games/*', {
  eager: true,
  import: 'default'
});

export default function Games() {
    const [gameIndex, setGameIndex] = useState(0);

    function handleNextClick(){
      setGameIndex(n => (n + 1) % game_list.length)
    }
    function handlePrevClick(){
      setGameIndex(n => (n - 1 + game_list.length) % game_list.length)
    }
    let game = game_list[gameIndex];
  return (
    <section>
        <h2>好きなゲーム</h2>
        <h3>{game.name}</h3>
        <img src={images[game.src]} style={{ width: 'auto', height: 'auto' }} alt={game.alt}/>
        <p>ジャンル： {game.genre}</p>
        <p>プレイ時間： {game.playTime}</p>
        <p>
          {game.detail.split('|').map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
        <p>{gameIndex+1} / {game_list.length}</p>
        <button onClick={handlePrevClick}>
          戻る
        </button>
        <button onClick={handleNextClick}>
          次へ
        </button>
        <button onClick={() => {
        setGameIndex(n => (n + 3) % game_list.length);
        }}> ３つ先へ
        </button>

    </section>
  );
}