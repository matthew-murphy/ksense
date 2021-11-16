import React, { Component } from "react";
import PopUp from "./PopUp";
import "./list.css"

class List extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
      posts: [],
      val: 0,
      showPopup: false,
    };
  }

  togglePopup(e) {
    const id = e.target.id
    console.log(id)
    this.setState({
      showPopup: !this.state.showPopup,
      val: parseInt(id),
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/USERS", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("https://jsonplaceholder.typicode.com/POSTS/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    const { users, posts } = this.state;
    console.log(this.state.val)
    console.log(users);
    console.log(posts);
    return (
      <div className="App">
        <ol className={"lst"}>
          {users.map((u) => (
            <li key={u.id} value={u.id}>
              <button className={"btn"} id={u.id} onClick={this.togglePopup.bind(this)}>
                {u.name} : {u.username}
              </button>
            </li>
          ))}
          {this.state.showPopup ? (
              <PopUp
                title={
                  posts.filter(x => x.userId === this.state.val).map(x => (
                    <>
                    <h2>{x.title}</h2>
                    <p>{x.body}</p>
                    </>
                    ))
                }
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
        </ol>
      </div>
    );
  }
}
export default List;
