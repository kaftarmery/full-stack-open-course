const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Total = (props) => {
    return (
      <>
        <p>Number of exercises in total: {props.totalExercises}</p>
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
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
      </>
    );
  };

  // what is rendered on the screen. this is the "return" of the App.jsx
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
