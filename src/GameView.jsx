const images = import.meta.glob('./assets/games/*', {
  eager: true,
  import: 'default'
});

export default function GameView({ game }) {
  return (
    <>
      <h3>{game.name}</h3>

      <img
        src={images[game.src]}
        style={{ width: 'auto', height: 'auto' }}
        alt={game.alt}
      />

      <p>ジャンル：{game.genre}</p>
      <p>プレイ時間：{game.playTime}</p>
      <p className="game-detail">{game.detail}</p>
    </>
  );
}