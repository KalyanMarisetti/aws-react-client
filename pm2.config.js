module.exports = {
    apps: [
      {
        name: 'react-app',
        script: 'npm',
        args: 'start',
        watch: true,
        ignore_watch: ['node_modules', 'build'],
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  