import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 pt-32">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          About Class Component
        </h1>

        <div className="flex flex-col items-center justify-center">
          <UserClass name={"First"} location={"Bangalore class"} />
        </div>
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <UserClass name={"Santosh (Class)"} location={"Bangalore class"} />
//     </div>
//   );
// };

// export default About;
