const express = require('express');
const app = express();
const companiesRoutes = require('./routes/companies');
const invoicesRoutes = require('./routes/invoices');

app.use(express.json());

// Mount the companies routes
app.use('/companies', companiesRoutes);

// Mount the invoices routes
app.use('/invoices', invoicesRoutes);

// 404 handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
