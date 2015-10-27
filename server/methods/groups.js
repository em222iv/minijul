Meteor.methods({
    insertGroup:function(name) {
        // Insert a list into the collection
        Groups.insert({
            title: name,
            author: Meteor.user().username,
            createdAt: new Date() ,
            //color: Meteor.user().profile[0].colors[Math.floor((Meteor.user().profile[0].colors.length + 1) * Math.random())],
        });
    },
    removeGroup:function(id) {
        Lists.remove(id);
    },
    updateGroup:function(id,title) {
        if(title.length <= 25) {
            Lists.update({_id: id}, {$set: {title: title}});
        }
    }
});