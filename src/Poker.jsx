import { useState } from 'react';


export default function Poker() {
  const [showMore, setShowMore] = useState(false);
  const [pokerRank, setPokerRank] = useState("PokerChase");
  
  function handleMoreClick() { setShowMore(!showMore); }

  return (
    <section>
        <h3>ポーカーについて：</h3>
        <p>ポーカー歴は5年ほど。2021年9月スタートで、ポカチェから入りました。<br/>
           アグレッシブに攻めて、場況を見ながらマイペースで相手を翻弄するのが好きです。<br/>
           たまに差し返されて長考したりもします。<br/>
           将来の夢は小中規模の海外トナメ優勝です。</p>
        <button onClick={handleMoreClick}>
          {showMore ? '詳細を閉じる' : 'もっと見る'}
        </button>
        {showMore && <section>
          <h3>ポーカーのランク帯：</h3>
          <label>
          ゲーム：
          <select value={pokerRank}
          onChange={e => setPokerRank(e.target.value)}>
            <option value="PokerChase">ポーカーチェイス</option>
            <option value="EdgePoker">EdgePoker</option>
            <option value="MHoldem">m HOLD'EM</option>
          </select>
        </label>

        {pokerRank === "PokerChase" && <p>ポーカーチェイス： レジェンド<br/>メインでプレイ中</p>}
        {pokerRank === "EdgePoker" && <p>Edge Poker： マスター<br/>サブでプレイ中</p>}
        {pokerRank === "MHoldem" && <p> m HOLD'EM：m3 King<br/>ちょこちょこ触る程度</p>}
          
          <h3>大会実績（上位入賞のみ）</h3>
          <p>Edge Poker The 6th Pre-Classic： 6位 / 1001人中 （FT進出）<br/>
          Double Belly 豊橋  選べるプライズトーナメント（2026/06/16）：1位 / 20人中<br/>
          じゃんけんポーカー 岡崎店  Monster Friday（2026/08/14）：1位 / 30人中 </p>
        </section>}
    </section>
  );
}