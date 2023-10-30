const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  const Header = (props) => {
    return <h1>{props.name}</h1>;
  };

  const Part = (props) => {
    const { partName, theExercise } = props;
    return (
      <>
        <p>
          {partName} - {theExercise}
        </p>
      </>
    );
  };

  const Content = (props) => {
    return (
      <div>
        {props.allParts.map((part, index) => (
          <Part key={index} partName={part.name} theExercise={part.exercises} />
        ))}
      </div>
    );
  };

  const Total = (props) => {
    return (
      <>
        <p>
          Total of exercises:{" "}
          {props.total.reduce((a, e) => {
            return a + e.exercises;
          }, 0)}
        </p>
      </>
    );
  };

  return (
    <div>
      <Header name={course.name} />
      <Content allParts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;

// totalExercises={
//   parts[0].exercises + parts[1].exercises + parts[2].exercises
// }
