const express = require('express');
const cors = require('cors');

const app = express();


// Use CORS
app.use(cors());

app.get('/api/whoami', (req, res) => {
    console.log(req.headers);
    const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress,
        language,
        software
    });
});

// Set the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
