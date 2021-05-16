import './Filter.css';

function Filter(props) {
    let filter = 
    <div className="pokedex-filter">
        <div className="pokedex-tabs">
            
        </div>
    </div>;

  return (
      props.isMain&&filter
  );
}

export default Filter;
