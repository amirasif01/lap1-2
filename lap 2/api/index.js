const app = require('./server');

app.listen(3000,() => {console.log(`listening at http://localhost:${3000}`)
});

module.export = app;