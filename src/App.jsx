import Profile from './Profile';
import Poker from './Poker';
import Games from './Games';
import Favorites from './Favorites';
import Skills from './Skills';
import ProfileData from './ProfileData';
import './index.css'

export default function App() {
  return (
    <div>
      <h1>芽笠 めるのホームページ</h1>
      <section>
        <Profile myData={ProfileData}/>
        <Poker/>
        <Games/>
        <Favorites/>
        <Skills/>
      </section>
    </div>
  );
}