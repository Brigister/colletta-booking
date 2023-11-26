module.exports = {
  apps: [
    {
      name: "cb-backend",
      script: "cd backend && node server.js",
      env: {
        NODE_ENV: "production",
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
