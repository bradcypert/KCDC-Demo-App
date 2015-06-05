if(Boards.find().count() === 0) {
  Boards.insert({
    cards:[
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"},
      {state: "B"}
    ]
  });
}
