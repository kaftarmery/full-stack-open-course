const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Total = (props) => {
    return (
      <>
        <p>Total of exercises: {props.totalExercises}</p>
      </>
    );
  };

  const Part = (props) => {
    return (
      <>
        <p>
          {/* instead of writing "props.part1/part2/part3 and props.exercises1/exercises2. We simply named the two "props" as part and exercise.
          Later in the Content component, we'll ASSIGN whatever value we want for the props to render. */}
          {props.part} {props.exercises}
        </p>
      </>
    );
  };

  const Content = () => {
    return (
      <>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </>
    );
  };

  // what is rendered on the screen. this is the "return" of the App.jsx
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
