export default app => {
  app.get('/rest', (req, res) => {
   res.setHeader('Content-Type', 'application/json');
   res.send({ message: 'Service is properly working.' });
  });
}
