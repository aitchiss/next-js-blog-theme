module.exports = {
  onPreBuild: () => {
    console.log('About to throw a random error - wooo');
    throw new Error(
      'Command failed with exit code: something went terribly wrong!!!'
    );
  },
};
