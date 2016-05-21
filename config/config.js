var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pyt-server'
    },
    port: process.env.PORT || 3009,
    db: 'postgres://ixqshaoa:12R8RvtsMBi8qUMBR7uNZ0xZIBHLZqDB@pellefant.db.elephantsql.com:5432/ixqshaoa'
  },

  test: {
    root: rootPath,
    app: {
      name: 'pyt-server'
    },
    port: process.env.PORT || 3009,
    db: 'postgres://ixqshaoa:12R8RvtsMBi8qUMBR7uNZ0xZIBHLZqDB@pellefant.db.elephantsql.com:5432/ixqshaoa'
  },

  production: {
    root: rootPath,
    app: {
      name: 'pyt-server'
    },
    port: process.env.PORT || 3009,
    db: 'postgres://ixqshaoa:12R8RvtsMBi8qUMBR7uNZ0xZIBHLZqDB@pellefant.db.elephantsql.com:5432/ixqshaoa'
  }
};

module.exports = config[env];
