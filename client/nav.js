Template.nav.onRendered(function () {
  $(".arcmenu").arcmenu();
});
Template.nav.events({
  'click #logout': function () {
    AccountsTemplates.logout();
  }
});