Groups = new Meteor.Collection('groups');

Schema = {};
Schema.Groups = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 25,
        optional: false
    },
    creator: {
        type: String,
        label: "Creator",
        max: 100,
        optional: true
    },
    color: {
        type: String,
        label: "Color",
        max: 25,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
        denyUpdate: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        denyInsert: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Groups.attachSchema(Schema.Groups);
