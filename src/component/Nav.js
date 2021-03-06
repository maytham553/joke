import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: " " };
  }
  pageName = Name => {
    this.setState({ name: Name });
  };
  onSearch = () => {
    let searchText = document.getElementById("search");
    let pageName = document.getElementById("page-name");
    if (searchText.className === "search-text") {
      searchText.className = "search-mode";
      pageName.style.opacity = "0"
    }
  };
  offSearch = () => {
    let searchText = document.getElementById("search");
    let pageName = document.getElementById("page-name");
    if (searchText.className === "search-mode") {
      searchText.className = "search-text";
      pageName.style.opacity = "100";
    }
  };

  render() {
    return (
      <div id="nav">
        <div className="top-nav nav">
          <form>
            <input
              id={"search"}
              className="search-text"
              placeholder="بحث"
              onClick={() => (this.pageName(" "), this.onSearch())}
            ></input>
          </form>
          <a className="page-name" id="page-name" href="#">
            {this.state.name}
          </a>
        </div>

        <div className="bottom-nav nav">
          <Link
            to="/"
            className={"ion-md-home"}
            onClick={() => (this.pageName("الرئيسية"), this.offSearch())}
          ></Link>
          <Link
            to="/trending"
            className={"ion-ios-trending-up"}
            onClick={() => (this.pageName("ترند"), this.offSearch())}
          ></Link>
          <Link
            to="/template"
            className={"ion-ios-image"}
            onClick={() => (this.pageName("تيمبلت"), this.offSearch())}
          ></Link>
          <Link
            to="/search"
            className={"ion-ios-search"}
            onClick={() => (this.pageName(" "), this.onSearch())}
          ></Link>
          <Link
            to="/upload"
            className={"ion-md-add"}
            onClick={() => (this.pageName("اضافة"), this.offSearch())}
          ></Link>
        </div>
      </div>
    );
  }
}
