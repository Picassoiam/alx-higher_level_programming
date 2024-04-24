#!/usr/bin/node

// Import the built-in Node.js 'fs' module
const fs = require('fs');

// Use fs.writeFile() to write data to a file specified as the third command-line argument (process.argv[2])
// The data to be written is taken from the fourth command-line argument (process.argv[3])
fs.writeFile(process.argv[2], process.argv[3], 'utf8', error => {
 
 // If an error occurs during the write operation, the 'error' parameter will contain an error object 
  if (error) {
    console.error(error);
  }
});
