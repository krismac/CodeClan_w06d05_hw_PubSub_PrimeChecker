const config = {
  entry: `${__dirname}/src/app.js`, //dirname is part of webpack to identify current folder/directory name
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;

//creates a config object in javascript (based on what webpack needs to look at first) and exports for visibility within the browser app.
