process.addListener('unhandledRejection', (e) => {
  console.log('e', e);
});
Promise.reject('rejection');
