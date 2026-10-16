import { useState } from 'react';
import game_list from './GameData.jsx';
import GameView from './GameView.jsx';

export default function Games() {
  const [gameIndex, setGameIndex] = useState(0);

  function handleNextClick() {
    setGameIndex(n => (n + 1) % game_list.length);
  }

  function handlePrevClick() {
    setGameIndex(n => (n - 1 + game_list.length) % game_list.length);
  }

  const game = game_list[gameIndex];

  return (
    <section>
      <h2>好きなゲーム</h2>

      <GameView game={game} />

      <p>{gameIndex + 1} / {game_list.length}</p>

      <button onClick={handlePrevClick}>
        戻る
      </button>

      <button onClick={handleNextClick}>
        次へ
      </button>

      <button
        onClick={() => {
          setGameIndex(n => (n + 3) % game_list.length);
        }}
      >
        3つ先へ
      </button>
    </section>
  );
}