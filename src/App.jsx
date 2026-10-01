import Profile from './Profile';
import Poker from './Poker';
import Games from './Games';
import Favorites from './Favorites';
import Skills from './Skills';

function App() {
  return (
    <div>
      <h1>芽笠 めるのホームページ</h1>
      <section>
        <Profile/>
        <Poker/>
        <Games/>
        <Favorites/>
        <Skills/>
      </section>
    </div>
  );
}

export default App;