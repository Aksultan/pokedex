import './Header.css';
import Filter from './filter/Filter'
function Header(props) {
  return (
    <header className="pokedex-header">
      <section className="section-header container">
        <img src={process.env.PUBLIC_URL+"/logo.svg"} alt="Pokemon logo" />
      </section>
      <Filter isMain={props.isMain}/>
    </header>
  );
}

export default Header;
