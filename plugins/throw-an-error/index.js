module.exports = {
  onPreBuild: ({ utils }) => {
    console.log('About to throw a random error - wooo');
    try {
      throw new Error('Command failed with exit code: 6MJ7565');
    } catch (error) {
      utils.build.failPlugin('MY ERROR MESSAGE', { error });
    }
  },
};
