const express = require('express')
const app = express()
const port = 3000

const marqdown = require('./marqdown');

app.configure(function () {
    app.use(express.bodyParser());
});


app.post('/preview', function(req,res)
{
    try
    {
        var text = marqdown.render( req.body );
        res.send( {preview: text} );
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send( {preview: e.message});
    }
})

app.listen(port, () => console.log(`Microservice listening on http://localhost:${port}/preview`))