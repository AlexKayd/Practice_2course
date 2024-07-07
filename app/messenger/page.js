import Messenger_selection from '@/app/components/Messenger_selection';
import Header from '@/app/components/Header';

export const metadata = {
    title: "Messenger",
    description: "Мессенджер"
  };

export default function Messenger() {
  return (
    <main>
        <Messenger_selection/>
        <Header text ="Мессенджер"/>
    </main>
  );
}
