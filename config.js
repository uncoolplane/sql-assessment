module.exports = {
	app: {
		title: 'AssessBox'
	},
	sessionSecret: 'assessbox',
  dbUser: 'postgres',
  dbPassword: 'admin',
  database: 'assessbox',
	facebook: {
		clientID: '392721351107261',
	  clientSecret: '7da5ad542f1d1d8d17153c76257871df',
	  sessionSecret: 'some-random-string',
		callbackURL: 'http://localhost:3737/auth/facebook/callback'
	}
};
