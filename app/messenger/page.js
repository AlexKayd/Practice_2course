import Messenger_selection from '@/app/components/Messenger_selection';
import Header from '@/app/components/Header';
import './messenger.css';

export const metadata = {
    title: "Messenger",
    description: "Мессенджер"
  };

export default function Messenger() {
  return (
    <main>
        <Messenger_selection/>
        <Header text ="Мессенджер"/>
          <div className="container">
            <div className="loading-message">
              <h1>В разработке...</h1>
          </div>
      </div>
    </main>
  );
}
