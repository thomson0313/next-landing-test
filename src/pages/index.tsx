import styles from '../styles/index.module.css'
import Header from './components/sections/header';
import FirstIndex from './components/sections/firstIndex';
import SecondIndex from './components/sections/secondIndex';
import ThirdIndex from './components/sections/thirdIndex';
import FourthIndex from './components/sections/fourthIndex';
import FifthIndex from './components/sections/fifthIndex';
import SixthIndex from './components/sections/sixthIndex';
import Footer from './components/sections/footer';
export default function Home() {
  return (
    <div className={`${styles.index}`}>
      <Header />
      <FirstIndex />
      <SecondIndex />
      <ThirdIndex />
      <FourthIndex />
      <FifthIndex />
      <SixthIndex />
      <Footer />
    </div>
  );
}
