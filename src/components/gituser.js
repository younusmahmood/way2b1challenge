import React from "react";

const GitUser = ({ user }) => {
  return (
    <div className="user">
      <h1>{user.username ? `Username: ${user.username}` : user.username}</h1>
      <img alt={user.username} src={user.img} />
      <ul className="repoList">
        {user.repos ? user.repos.map(repo => {
          return <li key={repo.name}>{repo.name}</li>;
        }): user.repos}
      </ul>
      <p>{user.lastUpdated}</p>
    </div>
  );
};

export default GitUser;
