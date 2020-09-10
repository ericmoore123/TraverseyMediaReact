import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const username = this.props.match.params.login;
    // console.log(username);
    // console.log(this.props.getUser(username));
    this.props.getUser(username);
    // this.props.getUser(this.props.match.params.login); //pull username out of url
    this.setState({
      loading: false,
    });
  }

  checkHireable(status) {
    if (status) {
      return <i className="fa fa-check text-success"> Hireable</i>;
    } else {
      return <i className="fa fa-times-circle text-danger"> Hireable</i>;
    }
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return (
      <Fragment>
        <Link to="/home" className="btn btn-light">
          Back to search
        </Link>
        {this.checkHireable(hireable)}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="User avatar"
              style={{ width: "150px" }}
            />
            <h2>{name}</h2>
            <h4>Location: {location}</h4>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>{bio}</h3>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {public_repos && (
                  <Fragment>
                    <strong>Public Repositories: </strong>
                    {public_repos}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
