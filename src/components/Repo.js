import React from "react";

const Repo = ({ repo }) => {
  return (
    <div>
      <li className="list-group-item">
        <i className="fas fa-hand-point-right mr-3"></i>
        <a href={repo.html_url}>{repo.name}</a>
      </li>
    </div>
  );
};
export default Repo;
