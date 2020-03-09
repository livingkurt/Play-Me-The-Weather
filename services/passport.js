const passport = require('passport')
const SpotifyStrategy = require('../lib/passport-spotify/index').Strategy;


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, expires_in
//   and spotify profile), and invoke a callback with a user object.
passport.use(
  new SpotifyStrategy(
    {
      clientID: "c45dca0ef75242e8b90181278d450f2f",
      clientSecret: "5d5ba31bc6c74b95850dc8547c78c971",
      callbackURL: '/auth/spotify/callback'
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        console.log(accessToken)
        console.log(profile)
        return done(null, profile);
      });
    }
  )
);
