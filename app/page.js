import styles from "./page.css";
import Header_main from './components/Header_main';
import Registration_form from './components/Registration_form';
import Enterance from "./components/Enterance";


export default function Home() {
  return (
    <main>
      <Header_main text ="Social platform for 8 Institute "/>

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
