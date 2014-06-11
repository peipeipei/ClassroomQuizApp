Posts = new Meteor.Collection('posts');

////////////////////////
// CLIENT
////////////////////////

if (Meteor.isClient) {
  
  function getCurrentUser () 
  {
    return Meteor.user().emails[0].address.split("@")[0]; 
  }
  
  function insertChatMessage()
  {
      var currentUser =  getCurrentUser(); 
      var currentChatContentObject = $('#studentTextarea');
      var currentChatContent = currentChatContentObject.val();
      
      //if (true)
      console.log("got here");
        Posts.insert({chatContent: currentChatContent, username: currentUser, timestamp: (new Date()).getTime()})
//        function(){
//            console.log("done inserting")
//            var chatHistory = $('#chatHistory')
//            chatHistory.animate({scrollTop: chatHistory[0].scrollHeight}, 1000);
//        })

      $("#studentTextarea").val("");
  }

  Template.studentView.events({
    'click #studentSend': function () {            
      insertChatMessage()
    },
    
    'keydown #studentTextarea': function(keypressed)
    {
        if(keypressed.which == 13){
            event.preventDefault()
            insertChatMessage()
        }
    }    
  });
}





