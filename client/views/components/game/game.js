Template.game.helpers({
  cards: function(){
    var boards = Boards.findOne();
    return boards.cards.map(function(card, index){
      card.index = index;
      return card;
    });
  }
});

Template.game.events({

  'click .card': function(event, template){
    var set = {};
    set['cards.'+(this.index)+'.state']=Session.get('team');
    Boards.update({_id: '7Gkbif3zvpP4HQePT'},{$set: set});
  },

  'click .team': function(event, template){
    Session.set('team', event.target.dataset.team);
  }
  
});
