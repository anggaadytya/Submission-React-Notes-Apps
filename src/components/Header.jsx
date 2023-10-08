import React from "react";
import Vite from "../assets/vite.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchInput.value;
    this.props.handleSearch(searchValue);
  };

  render() {
    return (
      <header>
        <div className="logo">
          <img src={Vite} alt="" />
          <h1>Notes Apps</h1>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="searchInput" placeholder="Search" className="searchInput" />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  }
}

export default Header;
