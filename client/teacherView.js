Approved = new Meteor.Collection("approve");

Template.teacherView.lines = function () {
    return Posts.find({},{sort:{timestamp:1}}).fetch();    
}


//Approved.insert({chatContent: currentChatContent, username: currentUser, timestamp: (new Date()).getTime()})




if (Meteor.isClient) {  

  Template.teacherView.events({
      
      'click .selectButton': function(){ 
        
        Approved.insert(this)
        
      Posts.remove({"_id":this._id})
      },
      
      
      'click .deleteButton': function(){
        Posts.remove({"_id":this._id})
      },
      
      'click .teacherClearClass': function(){
       Meteor.call('removeAllPosts')
      }
      
  });
}





