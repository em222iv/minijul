Template.private.onRendered(function () {

    $( "#friends" ).click(function() {
        $('#modal3').openModal();
    });

    $(document).ready(function(){
        $('.collapsible').collapsible({
            //accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    });

    var editableList1 = Sortable.create(groups, {
        animation:50,
        draggable: '.friend',
        handle: '.friend',
        group: {
            name:"groups",
            put: ['friends'],
            pull: 'pull'
        },
        onAdd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            console.log(itemEl.classList[1]);

            itemEl.classList[1] = "btn-large";
            //console.log(evt.item.classList[1]);
        },

    });
    var editableList2 = Sortable.create(friendslist, {
        animation:50,
        draggable: '.friend',
        handle: '.friend',
        group: {
            name:"friends",
            put: ['groups'],
            pull: 'clone'
        }

    });
});

Template.private.helpers({
    users: function(){
        return Meteor.users.find().fetch();
    },

});