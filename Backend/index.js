// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import bookRoute from './route/book.route.js'
// import userRoute from './route/user.route.js'
// import cors from 'cors'

// const app = express();

// app.use(cors())

// // app.use(cors());
// app.use(express.json())
// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // connect to mongoDB
// try {
//     mongoose.connect(URI);
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

// // defining routes
// app.use("/book",bookRoute)
// app.use("/users",userRoute)

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });


// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI); // Use await for async connection
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Error: ", error.message); // Log the error message
    }
};

connectToDatabase(); // Call the function to connect

// defining routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});