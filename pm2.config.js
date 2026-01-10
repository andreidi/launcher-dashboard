module.exports = {
  apps: [
    {
      name: 'launchboard',
      script: 'http-server',
      args: 'dist/launcher-dashboard/browser -p 8080 -c-1 --cors -g',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
