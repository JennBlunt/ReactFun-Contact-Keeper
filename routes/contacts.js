const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get a users contacts');
});

// @route   POST api/users
// @desc    Add new contacts 
// @access  Private
router.post('/', (req, res) => {
    res.send('Add a new contact');
});

// @route   Put api/contact/:id
// @desc    
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELET api/contacts:id
// @desc    Register a user 
// @access Public
router.delete('/:id', (req, res) => {
    res.send('Delete a contact');
});

module.exports = router;
