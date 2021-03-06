const server = require('./server')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

// Load .env if not using pm2
if (!process.env.PM2_USAGE) {
  require('dotenv-extended').load()
}

// Listen on configured host:port
server.listen(port, host, (err) => {
  if (err) console.error(err)
  console.log(`[i] ${process.env.NAME} is running on ${process.env.URL}`)
  console.log(`[i] NODE_ENV: ${process.env.NODE_ENV || server.settings.env}`)
  console.log(`[i] MONGODB_URI: ${process.env.MONGODB_URI}`)
})
