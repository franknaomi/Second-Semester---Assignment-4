const express = require("express");
const authorRouter = express.Router();


// Mock authors data
let authors = [
    { id: 1, name: 'Naomi Frank' },
    { id: 2, name: 'Chimamanda Adichie' },
    { id: 3, name: 'Chinua Achebe' },
    { id: 4, name: 'Khalid Hosseini' }
];

// GET all authors
authorRouter.get('/', (req, res) => {
    res.json(authors);
});

// GET a single author by id
authorRouter.get('/:id', (req, res) => {
    const authorId = parseInt(req.params.id);
    const author = authors.find(author => author.id === authorId);
    if (!author) {
        return res.status(404).json({ message: 'Author not found' });
    }
    res.json(author);
});

// POST a new author
authorRouter.post('/', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: 'Missing id or name' });
    }
    authors.push({ id, name });
    res.status(201).json({ message: 'Author added successfully' });
});

// PUT to update an author by id
authorRouter.put('/:id', (req, res) => {
    const authorId = parseInt(req.params.id);
    const { name } = req.body;
    const author = authors.find(author => author.id === authorId);
    if (!author) {
        return res.status(404).json({ message: 'Author not found' });
    }
    author.name = name;
    res.json({ message: 'Author updated successfully' });
});

// DELETE an author by id
authorRouter.delete('/:id', (req, res) => {
    const authorId = parseInt(req.params.id);
    authors = authors.filter(author => author.id !== authorId);
    res.json({ message: 'Author deleted successfully' });
});

module.exports = authorRouter;
