const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

  

        let books = [
            {
                id:1,
                title: 'The Alchemist',
                isbn: 9780061122415,
                author: {id: 1, firstname: 'Paulo', lastname: 'Coelho'}
            },
            {
                id:2,
                title: 'The Prophet',
                isbn: 9780099416937,
                author: {id: 2, firstname: 'Kahlil', lastname: 'Gibran'}
            }
        ];

        app.get('/api/book/:id', (req, res) => {
            let book = books.find((book) => book.id === parseInt(req.params.id));
            res.send(book);
            },
            );

            app.listen(port, () => {
                console.log(`Example app listening at http://localhost:${port}`);
                });
        