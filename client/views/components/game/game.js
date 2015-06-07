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
    Meteor.call('updateBoardState', this.index, Session.get('team'));
  },

  'click .team': function(event, template){
    Session.set('team', event.target.dataset.team);
  }

});
