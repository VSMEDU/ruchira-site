const { SquareClient, SquareEnvironment } = require('square');

/**
 * Returns a configured Square client or an error message.
 * @returns {{ client: SquareClient|null, error: string|null }}
 */
function getSquare() {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    return { client: null, error: 'Square not configured: missing SQUARE_ACCESS_TOKEN' };
  }
  if (!process.env.SQUARE_LOCATION_ID) {
    return { client: null, error: 'Square not configured: missing SQUARE_LOCATION_ID' };
  }

  const isProduction = process.env.SQUARE_ENVIRONMENT === 'production';
  const client = new SquareClient({
    token: process.env.SQUARE_ACCESS_TOKEN,
    environment: isProduction ? SquareEnvironment.Production : SquareEnvironment.Sandbox
  });

  return { client, error: null };
}

module.exports = { getSquare };
