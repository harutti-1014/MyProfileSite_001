/* 
{
  id: , 
  name: '', 
  src: '', 
  alt: '', 
  genre: '',
  playTime: '', 
  detail: '' 
  },
*/

const game_list = [
  {
    id: 0,
    name: 'TitanFall2',
    src: './assets/games/titanfall2.png',
    alt: 'TitanFall2 タイトル画像',
    genre: 'FPS',
    playTime: '300時間',
    detail: '神ゲー その①|ローニンが得意、グラップルたのしい！！'
  },
  {
    id: 1,
    name: 'OverWatch',
    src: './assets/games/overwatch.png',
    alt: 'OverWatch タイトル画像',
    genre: 'FPS',
    playTime: '1000時間',
    detail: '１の頃からちまちまやってる 最高プラチナ１|全ロール出来るけど、タンクが一番好き。ザリア、ラマットラ、シグマがすき'
  },
  {
    id: 2,
    name: 'ドラゴンクエストＸ',
    src: './assets/games/DQX.png',
    alt: 'ドラゴンクエスト１０ タイトル画像',
    genre: 'MMORPG',
    playTime: '5000時間',
    detail: '実家。WiiUベータからプレイ|バトマスをずーっとやってた。今はデュラタクばっかりやってる'
  },
  {
    id: 3,
    name: 'METAL GEAR シリーズ',
    src: './assets/games/MGSPW.png',
    alt: 'メタルギアソリッドピースウォーカー タイトル画像',
    genre: '潜入アクションTPS',
    playTime: 'クリアまで（3、GZ、V、PW）',
    detail: 'ビッグボスの系列しかやれてねぇ。。。|ソリッドの系列もやりたい'
  },
  {
    id: 4,
    name: '溶鉄のマルフーシャ',
    src: './assets/games/Marfusha.png',
    alt: '溶鉄のマルフーシャ タイトル画像',
    genre: 'タワーディフェンス',
    playTime: '全実績取得まで',
    detail: '神ゲー その②|フェリセットねーちゃんが好き'
  },
  {
    id: 5,
    name: '救国のスネジンカ',
    src: './assets/games/Snezhinka.png',
    alt: '救国のスネジンカ タイトル画像',
    genre: 'タワーディフェンス',
    playTime: '全実績取得まで',
    detail: '神ゲー その③|エクトルちゃんかわいいね。。。　アブレックさんもすき'
  },
  {
    id: 6,
    name: 'KATANA ZERO',
    src: './assets/games/KATANA ZERO.png',
    alt: 'カタナゼロ タイトル画像',
    genre: '2Dアクション',
    playTime: 'クリアまで',
    detail: '神ゲー その④|早くDLC出てくれ！！！！！'
  },
  {
    id: 7,
    name: 'GUILTY GEAR -STRIVE-',
    src: './assets/games/GGST.png',
    alt: 'ギルティギアストライブ タイトル画像',
    genre: '格ゲー',
    playTime: '200時間',
    detail: 'そこそこやってる。メインでやってる格ゲー|名残雪最高！超カッコいいしブラッドゲージもおもろい'
  },
  {
    id: 8,
    name: 'Apex Legends',
    src: './assets/games/ApexLegends.png',
    alt: 'Apex Legends タイトル画像',
    genre: 'FPS',
    playTime: '700時間',
    detail: 'リリース時からプレイ|オクタン、レイスがすき'
  },
  {
    id: 9,
    name: 'BattleField 1',
    src: './assets/games/BattleField1.png',
    alt: 'バトルフィールド１ タイトル画像',
    genre: 'FPS',
    playTime: '500時間',
    detail: '発売日からプレイ|騎兵がすき、全兵科やりこんでた'
  },
  {
    id: 10,
    name: 'BattleField 4',
    src: './assets/games/BattleField4.png',
    alt: 'バトルフィールド４ タイトル画像',
    genre: 'FPS',
    playTime: '200時間',
    detail: 'PS4でやってた|突撃兵のM416がすき。'
  },
  {
    id: 11,
    name: 'Splatoon 2',
    src: './assets/games/Splatoon2.png',
    alt: 'スプラトゥーン２ タイトル画像',
    genre: 'FPS',
    playTime: '1700時間',
    detail: '一番やってたのは２、TOP500入った経験アリ|N-ZAP85とスプラシューターをずっと使っている'
  },
  {
    id: 12,
    name: 'Devil May Cry',
    src: './assets/games/DMC.png',
    alt: 'デビルメイクライ５ タイトル画像',
    genre: 'アクション',
    playTime: 'クリアまで（4,5）',
    detail: '1～3、DmCは積みゲーしている|ダンテの余裕たっぷりのセリフが好き'
  },
  {
    id: 13,
    name: 'League of Legends',
    src: './assets/games/LoL.png',
    alt: 'League of Legends タイトル画像',
    genre: 'MOBA',
    playTime: 'ちょっとだけ',
    detail: '誘われたらやるくらい？|TOPのモルデしかできません'
  },
  {
    id: 14,
    name: 'Pokémon UNITE',
    src: './assets/games/Pokemon UNITE.png',
    alt: 'ポケモンユナイト タイトル画像',
    genre: 'MOBA',
    playTime: '100時間',
    detail: 'MOBAの触り始めとしてやってた|カビゴンが大好き＆大得意'
  },
  {
    id: 15,
    name: 'Street Fighter 6',
    src: './assets/games/SF6.png',
    alt: 'ストリートファイター６ タイトル画像',
    genre: '格ゲー',
    playTime: '50時間',
    detail: 'ちょこちょこサブでやってる格ゲー。|ベガが好き（なんと名残雪と声優が一緒という。。。）'
  },
  {
    id: 16,
    name: 'Star Fox',
    src: './assets/games/StarFox.png',
    alt: 'スターフォックス タイトル画像',
    genre: 'シューティング',
    playTime: 'クリアまで',
    detail: '初めてやったのは64 3D|Switch版のスタフォもやりたい'
  }
];

export default game_list;