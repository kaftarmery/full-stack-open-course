const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Total = (props) => {
    // USED REDUCE TO GET THE FUM OF THE ARRAY
    return (
      <>
        <p>
          Total of exercises:{" "}
          {props.parts.reduce((a, e) => {
            return a + e.exercises;
          }, 0)}
        </p>
      </>
    );
  };

  const Part = (props) => {
    return (
      <>
        <p>
          {/* {props.part} {props.exercises} */}
          {props.parts.name} {props.parts.exercises}
        </p>
      </>
    );
  };

  const Content = (props) => {
    return (
      <>
        {/* <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} /> */}

        <Part parts={props.parts[0]} />
        <Part parts={props.parts[1]} />
        <Part parts={props.parts[2]} />
      </>
    );
  };

  // what is rendered on the screen. this is the "return" of the App.jsx
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;

// totalExercises={
//   parts[0].exercises + parts[1].exercises + parts[2].exercises
// }
