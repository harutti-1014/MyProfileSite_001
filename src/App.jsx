import Profile from './Profile';
import Poker from './Poker';
import Games from './Games';
import Favorites from './Favorites';
import Skills from './Skills';
import profileImage001 from './assets/profile_001.png';
import './index.css'

export default function App() {
  return (
    <div>
      <h1>芽笠 めるのホームページ</h1>
      <section>
        <Profile myData = {{ 
          imgsrc: profileImage001,
          imgalt: 'プロフィール画像',
          imgwidth: 1200,
          imgheight: 675,
          name: '芽笠 める', 
          birthday: '2001年10月14日', 
          hobbies: ['ゲーム','サウナ','プログラミング','映画','ポーカー','麻雀'],
          skills: ['ポーカー（小規模大会で優勝経験アリ）','タイピング（分速350回）','Atcoder（茶）']}}/>
        <Poker/>
        <Games/>
        <Favorites/>
        <Skills/>
      </section>
    </div>
  );
}