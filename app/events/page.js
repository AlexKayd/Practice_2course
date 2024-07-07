import Events_selection from '@/app/components/Events_selection';

export const metadata = {
  title: "Events",
  description: "Календарь мероприятий"
};

export default function Lk() {
  return (
    <main>
        <Events_selection/>
    </main>
  );
}
