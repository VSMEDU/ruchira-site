/**
 * Serves public Square configuration as a JavaScript snippet.
 * SQUARE_APPLICATION_ID and SQUARE_LOCATION_ID are non-secret public keys
 * required by the Square Web Payments SDK in the browser.
 * SQUARE_ENVIRONMENT controls which Square SDK CDN URL to use.
 */
module.exports = (req, res) => {
  const appId = process.env.SQUARE_APPLICATION_ID || '';
  const locationId = process.env.SQUARE_LOCATION_ID || '';
  const isProduction = process.env.SQUARE_ENVIRONMENT === 'production';
  const sdkUrl = isProduction
    ? 'https://web.squarecdn.com/v1/square.js'
    : 'https://sandbox.web.squarecdn.com/v1/square.js';

  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300'); // 5 min cache
  res.status(200).send(
    `window.SQUARE_APP_ID=${JSON.stringify(appId)};` +
    `window.SQUARE_LOCATION_ID=${JSON.stringify(locationId)};` +
    `window.SQUARE_SDK_URL=${JSON.stringify(sdkUrl)};`
  );
};
