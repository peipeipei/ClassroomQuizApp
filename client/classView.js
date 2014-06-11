//Approved = new Meteor.Collection("approve");

Template.classView.lines = function () {
    return Approved.find({},{sort:{timestamp:1}}).fetch();    
}


//Approved.insert({chatContent: currentChatContent, username: currentUser, timestamp: (new Date()).getTime()})









