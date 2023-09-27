const App = () => {
  return (
    <div>
      <Tweet
        username="ttran"
        name="tykan"
        date="september"
        message="I want to be rich"
      />
      <Tweet
        username="kitty"
        name="mari"
        date="september"
        message="I want to be rich"
      />
      <Tweet
        username="deek"
        name="alex"
        date="september"
        message="I want to be jacked"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
