import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;
app.use('/', (req, res) => {
    res.json({ message: `Server is up and running` });
});

app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
});