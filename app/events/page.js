import Events_selection from '@/app/components/Events_selection';
import Header from '@/app/components/Header';

export const metadata = {
  title: "Events",
  description: "Календарь мероприятий"
};

export default function Lk() {
  return (
    <main>
        <Events_selection/>
        <Header text ="Календарь мероприятий"/>
    </main>
  );
}
