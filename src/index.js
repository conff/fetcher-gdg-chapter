import * as _ from 'lodash';
import logWith from 'log-with';
import request from 'request-promise-native';
import Fetcher from './fetcher';
import Util from './util';

const env = process.env;
const logger = logWith(module);

const run = async () => {
  const fetcher = new Fetcher({
    request,
    logger,
  }, {
    url: env.API_URL,
  });

  const chapters = Util.map(_, await fetcher.run());
  Util.save(_, {}, chapters);
};

/* istanbul ignore if */
if (require.main === module) {
  const onExit = (err) => {
    logger.error(JSON.stringify(err, Object.getOwnPropertyNames(err)));
    process.exit(1);
  };
  run();
  process.on('uncaughtException', onExit);
  process.on('unhandledRejection', onExit);
}

export default run;
