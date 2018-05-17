$(document).ready(function(){
  particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  $('#fullpage').fullpage();
  $(".collapsible").collapsible();
 $('select').material_select();
 $(".nav_element").click(function(){
   close_nav();
 });
})
var state=0;
function trigger_nav(){
  if(state==0){
    open_nav();
    state=1;
  }
  else{
    close_nav();
    state=0;
  }
}
function open_nav(){
  $("#navbar").removeClass("nav_hidden").addClass("nav_show");
  $("#screen").css("filter","blur(5px)");
  $("#bg_image").css("filter","blur(2px)");
  $("#screen").click(function(){
    close_nav();
  });
}
function close_nav(){
  $("#navbar").removeClass("nav_show").addClass("nav_hidden");
  $("#screen").css("filter","blur(0px)");
  $("#bg_image").css("filter","blur(0px)");
}


function submit(){
  //GET ALL DATA;
  console.log("submit");
  var name=$("#name").val();
  var college=$("#college").val();
  var year=$("#year").val();
  var ba_option=$("#eabo").val();
  var email=$("#email").val();
  var fblink=$("#fb").val();
  var phone=$("#phone").val();
  var whatsapp=$("#whatsapp").val();
  var address=$("#address").val();
  var techfest=$("#techfest").val();
  var sr_name=$("#rep_name").val();
  var sr_phone=$("#rep_phone").val();
  var sr_link=$("#rep_link").val();
  var robot=$("#contact_rob").val();
  var gaming=$("#contact_game").val();
  var others=$("#contact_other").val();
  var suggestions=$("#suggestions").val();
  if(year==""){
    alert("Year not selected");
    return;
  }
  if(ba_option==""){
    alert("BTech/Architecture option not selected");
    return;
  }
  if(name==""){
    alert("Name is not entered");
    return;
  }
  if(college==""){
    alert("College is not entered");
    return;
  }
  if(phone==""){
    alert("Phone number not entered");
    return;
  }
  var dataString="1="+name+"&2="+college+"&3="+year+"&4="+ba_option+"&5="+email+"&6="+fblink+"&7="+phone+"&8="+whatsapp+"&9="+address+"&10="+techfest+"&11="+sr_name+"&12="+sr_phone+"&13="+sr_link+"&14="+robot+"&15="+gaming+"&16="+others+"&17="+suggestions;
  $.ajax({
      type: "POST",
      url: "save.php",
      data: dataString,
      cache: false,
      success:function(e){
        console.log(e);
        alert("Successfully registered. Refresh page to register again.");
      }
  });

}
