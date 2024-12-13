const connectToDatabase = require('./app/_lib/database');

try {
    const db = connectToDatabase();
    console.log('Database connection successful!');
    db.close(); // Close the connection after testing
} catch (error) {
    console.error('Failed to connect to the database:', error);
}