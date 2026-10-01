import profileImage001 from './assets/profile_001.png';

export default function Profile() {
  return (
    <section>
        <img src={profileImage001} alt="プロフィール画像" width="900" height="506" />
        <h3>名前：芽笠 める</h3>
        <p>生年月日：2001年10月14日</p>
        <p>趣味：ゲーム、サウナ、プログラミング、映画、ポーカー、麻雀</p>
        <p>特技：ポーカー（小規模大会で優勝経験アリ） タイピング（分速350回） Atcoder（茶）</p>
    </section>
  );
}