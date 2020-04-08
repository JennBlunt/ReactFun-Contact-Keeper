const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ msg: 'Hey! This is the ContactKeeper API!' })
);



app.listen(PORT, () => console.log(`Server listening on port ${PORT} 👍🏻`));


