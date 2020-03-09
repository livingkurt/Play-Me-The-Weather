const passport = require('passport')

module.exports = (app) => {

  // GET /auth/spotify
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. The first step in spotify authentication will involve redirecting
  //   the user to spotify.com. After authorization, spotify will redirect the user
  //   back to this application at /auth/spotify/callback
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private'],
      showDialog: true
    })
  );
  
  // GET /auth/spotify/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. If authentication fails, the user will be redirected back to the
  //   login page. Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    }
  );

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  
}
