module.exports = {
    secret: 'secret', // you should consider changing this

    /**
     * Origins Header Information
     *
     * All clients accessing the API should have strict access. Be sure to
     * explicitly list all client domains for the corresponding environment. 
     * @type {Object}
     */
    prod: {
      origins: [
        '*' // NOT SECURE - Change to 'http://your-prod-domain.com',
      ]
    },
    dev: {
      origins: [
        '*' // NOT SECURE - Change to 'http://your-local-domain.com'
      ]
    },
    database: 'mongodb://localhost:27017/<mongo-db-name>',
    version: 'v1',
    staticsDirectory: 'public'
};