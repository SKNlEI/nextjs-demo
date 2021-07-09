module.exports = {
  apps: [
    {
      name: "skl",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      env: { PORT: 8080 }
    }
  ]
}