const MAX_CHARACTERS = 6;

const Person = (props) => {
  const voteText = props.age >= 18 ? "Go Vote!" : "Not old enough sorry!";

  const hobbiesList = props.hobbies.map((hobby) => {
    return <li>{hobby}</li>;
  });
  console.log(props.hobbies);
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: {props.name.slice(0, MAX_CHARACTERS)}</li>
        <li>Age: {props.age}</li>
      </ul>
      <ul>Hobbies: {hobbiesList}</ul>
      <h3>{voteText}</h3>
    </div>
  );
};
