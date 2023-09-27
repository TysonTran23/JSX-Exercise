const App = () => {
  return (
    <div>
    <Person
      name="Tyson"
      age={23}
      hobbies={["Golfing", "Coding", "Basketball"]}
    />
    <Person
      name="Mari"
      age={22}
      hobbies={["TikTok", "Cooking", "Ringette"]}
    />
    <Person
      name="Luka"
      age={0}
      hobbies={["Milk", "Sleeping", "Eye opening"]}
    />
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));
