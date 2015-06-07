Meteor.methods({
  updateBoardState: function (cardIndex,team){
    var set = {};
    set['cards.'+(cardIndex)+'.state'] = team;
    Boards.update({_id: '7Gkbif3zvpP4HQePT'},{$set: set});
  }
});
