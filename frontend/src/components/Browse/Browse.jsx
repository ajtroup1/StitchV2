import { useState } from "react";
import "../../css/Browse.css";

function Browse() {
  return (
    <div className="browse-main">
      <div className="browse-header">
        <p className="browse-title">Browse Stories</p>
      </div>
      <div className="browse-divider"></div>
      <div className="search-container">
        <input type="text" className="form-control browse-search-bar" placeholder="Search for stories, authors..."/>
      </div>
      <div className="search-button-container">
        <button className="btn btn-primary">Most Popular</button>
        <button className="btn btn-primary">Hot Right Now</button>
        <button className="btn btn-primary">Top Authors</button>
        <button className="btn btn-primary">Most Recent</button>
      </div>
    </div>
  );
}

export default Browse;
