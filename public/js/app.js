$(document).ready(function() {

	twttr.anywhere(function (T) {  
		if (T.isConnected()) {  
			$("#login-logout").append('<button id="signout" type="button">Sign out of Twitter</button>');  
			$("#signout").bind("click", function () {  
            	twttr.anywhere.signOut();  
          	});  
        }  
        else {  
        	T("#login-logout").connectButton();  
        }  
        T("#tweet").hovercards({ expanded: true });  
        T('#follow-twitter_screen_name').followButton($('#follow-twitter_screen_name').attr('class'));
    });
});