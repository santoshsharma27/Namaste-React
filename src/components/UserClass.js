import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "",
      },
      error: null,
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    try {
      // API Call
      const res = await fetch("https://api.github.com/users/santoshsharma27");
      if (!res.ok) throw new Error("Failed to fetch user data");
      const data = await res.json();
      this.setState({ userInfo: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { error } = this.state;

    return (
      <div className="p-5 border rounded-md shadow-md max-w-sm mx-auto">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <h2 className="text-lg font-semibold">Name: {name}</h2>
            <img
              src={avatar_url}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto my-4"
            />
            <h3 className="text-gray-600">Location: {location}</h3>
            <h4 className="text-gray-600">Contact: 7003189453</h4>
          </>
        )}
      </div>
    );
  }
}

export default UserClass;
