module.exports = {
  onPreBuild: ({ utils }) => {
    console.log('About to throw a random error - wooo');
    try {
      throw new Error('something');
    } catch (error) {
      utils.build.failPlugin('Command failed with exit code: 6MJ7565', {
        error,
      });
    }
  },
};
