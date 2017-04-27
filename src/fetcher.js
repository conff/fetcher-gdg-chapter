class Fetcher {
  constructor(utils, options) {
    Object.assign(this, {
      ...utils,
      options,
    });
  }

  async run() {
    const { request, options, logger } = this;
    const response = await request.get(options.url);
    const result = JSON.parse(response).groups || [];
    logger.info(`I've found ${result.length} chapters`);
    return logger;
  }
}

export default Fetcher;
