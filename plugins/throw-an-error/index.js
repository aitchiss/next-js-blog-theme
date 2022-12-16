module.exports = {
  onPreBuild: () => {
    console.log('About to throw a random error - wooo');
    throw new Error('something went terribly wrong!!!');
  },
};
