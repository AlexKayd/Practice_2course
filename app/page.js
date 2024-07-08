import styles from "./page.css";
import Header from './components/Header';
import Registration_form from './components/Registration_form';
import Enterance from "./components/Enterance";


export default function Home() {
  return (
    <main>
      <Header text ="Social platform "/>
      <Header text ="for 8 Institute"/>

      <div className = "container">
        <div className = "rectangle">
          <p>
            <Registration_form/>
            <Enterance/>
          </p>
        </div>
      </div>
    </main>
  );
}
