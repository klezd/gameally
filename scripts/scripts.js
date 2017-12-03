// header - icon of user info
$(document).ready(function() {
               var menu = TweenLite.to($(".menu"), 0.25, {opacity: 1, top: "10px", "z-index": 100});
               menu.reversed(true);

               $("#userInfo").click(function() {
                   if(menu.reversed())
                   {
                       menu.play();
                   }
                   else
                   {
                       menu.reverse();
                   }
               });
});
//signin in forgot password
function showmore() {
 document.getElementById("flip").classList.add("show-more");
 document.getElementById("verify-btn").textContent = "Resend";
}

// add sport to sport sportField
