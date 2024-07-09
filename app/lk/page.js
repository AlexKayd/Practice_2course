import Lk_selection from '@/app/components/Lk_selection';
import Header from '@/app/components/Header';
import Profile_form from '@/app/components/Profile_form';
import './lk.css';

export const metadata = {
  title: "Personal account",
  description: "Личный кабинет"
};

export default function Lk() {
  return (
    <main>
        <Lk_selection/>
        <Header text ="Личный кабинет"/>
        <div className = "container">
        <div className = "rectangle">
          <p>
          <Profile_form/>
          </p>
        </div>
      </div>
    </main>
  );
}
