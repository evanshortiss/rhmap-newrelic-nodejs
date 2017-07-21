'use strict'

const env = require('env-var');

exports.config = {
  /**
   * The application name is injected as an environment variable by RHMAP
   * Locally we can default to "Local Development Cloud" or something similar
   */
  app_name: [env('FH_TITLE', 'Local Development Cloud').asString()],

  /**
   * Your New Relic license key. This will be loaded from the NR_LICENCE_KEY
   * environment variable since we don't want to check it into our code
   */
  license_key: env('NR_LICENCE_KEY').required().asString(),

  logging: {
    /**
     * New Relic log level, we load this from an environment variable also since
     * it allows us to set different levels for different environments, or alter
     * the level without need to go thru a full code commit cycle
     */
    level: env('NR_LICENCE_LOG_LEVEL', 'info').asString()
  }
}
