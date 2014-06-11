Posts = new Meteor.Collection('posts');
/*
Posts.publish('posts', function(){
    return Posts.find({})  
})
*/

Approved = new Meteor.Collection("approve");

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllPosts: function() {

        return Posts.remove({});

      }

    });

  });

}



