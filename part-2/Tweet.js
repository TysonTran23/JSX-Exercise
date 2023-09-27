const Tweet = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
      <h4>{props.message}</h4>
    </div>
  );
};
