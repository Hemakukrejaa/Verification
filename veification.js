
if(Meteor.isClient)
{
Session.setDefault('visible',false)

Template.addPost.events({
  'click .clickable':function(){
    Session.set("visible",true)
  }
})

Template.addPost.helpers({
  showForm:function(){
  var show = Session.get('visible');
  if(show === true){
     return true;
  }else{
     return false;
   }
  }
})

//to set the session to false on refresh.
Template.addPost.destroyed = function(){
  Session.set('visible',false)
}
}