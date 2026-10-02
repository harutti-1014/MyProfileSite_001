

const game_fps = 
   [{id: 0, name: 'TitanFall2'},
    {id: 1, name:'Overwatch'},
    {id: 2, name:'BattleField'},
    {id: 3, name:'ApexLegends'}]

const game_ftg = 
   [{id: 0, name: 'GGST'},
    {id: 1, name: 'SF6'}]

const game_other = 
 [{id: 0 , name: 'DQX（半引退）'},
  {id: 1, name: 'ポケモンユナイト'},
  {id: 2, name: 'LOL（ちょっとできる）'},
  {id: 3, name: 'デビルメイクライシリーズ'},
  {id: 4, name: '溶鉄のマルフーシャ / 救国のスネジンカ'},
  {id: 5, name:'StarFox'}]

export default function Games() {
    const fpsList = game_fps.map(game => <li key={game.id}> {game.name}</li>);
    const ftgList = game_ftg.map(game => <li key={game.id}> {game.name}</li>);
    const otherList = game_other.map(game => <li key={game.id}> {game.name}</li>);
  return (
    <section>
        <h3>好きなゲーム</h3>
          <p>FPS：</p>
          <ul>{fpsList}</ul>
          <p>格ゲー：</p>
          <ul>{ftgList}</ul>
          <p>その他：</p>
          <ul>{otherList}</ul>
    </section>
  );
}