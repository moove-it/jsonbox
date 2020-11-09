module.exports = {
  SIZE_LIMIT: 50, // mentioned in KB
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGODB_URI || "mongodb://localhost:27017/jsonbox-io-dev",
  REQUEST_LIMIT_PER_HOUR: 100,
  ENABLE_DATA_EXPIRY: false, // Once switched on the index will be be set in mongodb. It's necessary to manully remove the index in order to switch off the behaviour
  DATA_EXPIRY_IN_DAYS: null, // null, undefined, or 0 means that the document won't expire.
                             // If DATA_EXPIRY_IN_DAYS is set, but ENABLE_DATA_EXPIRY is falsey
                             // then the 'expiry' attribute will be set anyways.
                             // example: 30
  FILTER_IP_SET: [],  // example ['172.29.0.1']
  FILTER_OPTIONS: { mode: 'allow' },
};
