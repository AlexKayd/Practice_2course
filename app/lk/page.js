import Lk_selection from '@/app/components/Lk_selection';
import Header from '@/app/components/Header';

export const metadata = {
  title: "Personal account",
  description: "Личный кабинет"
};

export default function Lk() {
  return (
    <main>
        <Lk_selection/>
        <Header text ="Личный кабинет"/>
    </main>
  );
}
