Template.nav.onRendered(function () {
  $(".arcmenu").arcmenu();
  $(".dropdown-button").dropdown();

});
Template.nav.events({
  'click #logout': function () {
    AccountsTemplates.logout();
  }
});
Template.nav.helpers({

  'user': function() {
    return Meteor.user().emails[0].address
  }

});