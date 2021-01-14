'use strict';

// Load the config.
import config from './config/app.mjs';

// Load the app.
import app from './app.mjs';

// Run it.
app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config.port}${config.pathPrefix}.`);
});
