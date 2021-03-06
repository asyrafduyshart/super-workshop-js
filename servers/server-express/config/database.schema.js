const DATABASE_NAME = 'super-workshop-js'

const NEDB_PATH = './data/' + DATABASE_NAME

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost'
const MONGODB_PORT = process.env.MONGODB_PORT || '27017'
const MONGODB_DATABASE = process.env.DATABASE_NAME || DATABASE_NAME
const MONGODB_USER = process.env.MONGODB_USER || ''
const MONGODB_PASS = process.env.MONGODB_PASS || ''

const MONGODB_ATLAS_KEY = process.env.MONGODB_ATLAS_KEY || ``

let MONGODB_URI = ''

if (MONGODB_USER === '') {
  MONGODB_URI = process.env.MONGODB_URI || `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`
} else if (MONGODB_USER !== '') {
  MONGODB_URI = process.env.MONGODB_URI || `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`
}

module.exports = {
  NEDB_PATH,
  MONGODB_URI
}
