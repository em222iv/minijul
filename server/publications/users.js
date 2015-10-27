// USERS
// -------------------------------------------------------
Meteor.publish('allUsers', function() {
    cursor = Meteor.users.find({});
    return cursor;
});