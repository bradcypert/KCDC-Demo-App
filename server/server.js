Meteor.methods({
  updateBoardState: function (cardIndex,team){
    var set = {};
    set['cards.'+(cardIndex)+'.state'] = team;
    Boards.update({},{$set: set});
  }
});
