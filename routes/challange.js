module.exports = app => {
  app.get('/', (req, res) => {
    console.log('hello');
    res.send('Hello');
  });
};
