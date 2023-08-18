import './Navbar.css'; 
import SortingOptions from './SortingOptions'; // Import the component for sorting options
import GroupingOptions from './GroupingOptions'; // Import the component for grouping options

function Navbar({ groupBy, setGroupBy, sortBy, setSortBy }) {
  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa fa-sliders"></i> Display 
          <i className="fa fa-angle-down"></i> 
        </button>
        <div className="dropdown-content">
          
          {/* Rendering the grouping and sorting options components */}
          <GroupingOptions groupBy={groupBy} setGroupBy={setGroupBy} />
          <SortingOptions sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
