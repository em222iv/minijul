// GROUPS
// -------------------------------------------------------
Meteor.publish('groups', function() {
    return Groups.find();
});

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish("group", function(id){
    return Groups.find({ _id:id});
});

