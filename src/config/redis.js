export default {
    development: {
        host: process.env.REDIS_DEV_HOST,
        port: process.env.REDIS_DEV_PORT,
    },
    staging: {
        host: process.env.REDIS_STAGING_HOST,
        port: process.env.REDIS_STAGING_PORT,
    },
    test: {
        host: process.env.REDIS_TEST_HOST,
        port: process.env.REDIS_TEST_PORT,
    },
    production: {
        host: process.env.REDIS_PROD_HOST,
        port: process.env.REDIS_PROD_PORT,
    }
}