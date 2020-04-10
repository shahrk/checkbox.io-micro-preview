const express = require('express')
const app = express()
const port = 3000

const marqdown = require('./marqdown');

app.configure(function () {
    app.use(express.bodyParser());
});


app.post('/preview', function(req,res)
{
    console.log(req.body.markdown);
    var text = marqdown.render( req.body.markdown );
    res.send( {preview: text} );
})

app.listen(port, () => console.log(`Microservice listening on http://localhost:${port}/preview`))