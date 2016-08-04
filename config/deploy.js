/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
		environment: deployTarget
	},
	'revision-data': {
		type: 'git-commit'
	},
	'ssh-index': {
		remoteDir: "/home/deploy/careerjs",
		username: process.env['username'],
		host: process.env['host_ip'],
		privateKeyFile: process.env['privkey'],
		allowOverwrite: true
	},
	rsync: {
		dest: "/home/deploy/careerjs",
		username:  process.env['username'], 
		host:  process.env['host_ip_rsync'], 
		privateKey:  process.env['privkey'],
		delete: false
	}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
