var _auth2

var _onGoogleLoad = function () {
    gapi.load('auth2', function () {
        _auth2 = gapi.auth2.init({
            client_id: '930432434977-ugm0oqsp81du5d1rs9or8mvb1grmmi85.apps.googleusercontent.com',
            scope: 'email',
            fetch_basic_profile: false
        }).then(function(auth2) {

            // If the user is already signed in
            if (auth2.isSignedIn.get()) {
                var googleUser = auth2.currentUser.get();

                // Change user's profile information
                changeProfile(googleUser);
            }
        });
        _enableGoogleButton()
    })
}

window.onload = function(){
    const signInButton = document.getElementById('google-signin')
    const signOutButton = document.getElementById('google-signout')
    if (signInButton) {
        signInButton.addEventListener('click',function(){
            let auth2 = gapi.auth2.getAuthInstance();
            auth2.signIn()
                .then(changeProfile);
        })
    }
    if (signOutButton) {
        signOutButton.addEventListener('click',function(){
            let auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut()
                .then(changeProfile);
        })
    }
    const changeProfile = function(googleUser) {
        if (googleUser) {
            let profile = googleUser.getBasicProfile();
            let user = {
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl()
            };
            let session = new Session(user)
            session.create()
        } else {
            Session.destroy()
        }
    };


}