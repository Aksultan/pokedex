import './Main.css';
import Header from '../header/Header';
import Cards from '../cards/Cards';

function Main() {
  return (
    <>
      <Header isMain={true}/>
      <Cards />
    </>
  );
}

export default Main;
