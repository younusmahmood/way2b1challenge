import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";

import GitUser from "./gituser";

export default class SearchUser extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  handleEnter = async e => {
    const input = e.target.value;
    if (e.key === "Enter") {
      const res = await axios.get(`https://api.github.com/users/${input}`);
      const repos = await axios.get(`https://api.github.com/users/${input}/repos`);
      let lastUpdated = moment(res.data.updated_at).format(
        "MMMM Do YYYY, h:mm:ss a"
      );

      const user = {
        img: res.data.avatar_url,
        username: res.data.login,
        repos: repos.data || [],
        lastUpdated
      };

      this.setState({
        user
      });
    }
  };

  render() {
    return (
      <Fragment>
        <input
          onKeyPress={this.handleEnter}
          placeholder="Enter Github Username"
          className="search"
        />
        <GitUser user={this.state.user} />
      </Fragment>
    );
  }
}
