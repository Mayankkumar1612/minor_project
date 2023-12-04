const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./model/User');
const Personal = require('./model/Personal');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo connected ......")
    }
    catch (error) {
        console.log(error)
    }
}

dbConnect();

app.get("/register", (req, res) => {
    res.json('done');
})

app.post('/signup', async (req, res) => {
    try {
        const { userType, username, email, password } = req.body;
        const newUser = new User({
            userType,
            username,
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { userType, email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Inside the '/personal' endpoint
app.post('/personal', async (req, res) => {
    try {
        const {
            fullName,
            dob,
            email,
            phone,
            gender,
            branch,
            year,
            rollNo,
            address,
            bloodGroup,
            fatherName,
            motherName,
            graduation,
            fatherPhone,
            bankname,
            bankbranch,
            ifscCode,
            accNumber,
            licenceNumber,
            passport,
            aadharNo,
            panNo,
            addressType,
            nationality,
            state,
            district,
            blockNumber,
            wardNumber,
            father,
            mother,
            grandfather,
            spouseName,
            fatherLaw,
            motherLaw
        } = req.body;
        const newPersonal = new Personal({
            fullName,
            dob,
            email,
            phone,
            gender,
            branch,
            year,
            rollNo,
            address,
            bloodGroup,
            fatherName,
            motherName,
            graduation,
            fatherPhone,
            bankname,
            bankbranch,
            ifscCode,
            accNumber,
            licenceNumber,
            passport,
            aadharNo,
            panNo,
            addressType,
            nationality,
            state,
            district,
            blockNumber,
            wardNumber,
            father,
            mother,
            grandfather,
            spouseName,
            fatherLaw,
            motherLaw
        });

        await newPersonal.save();
        res.status(201).json({ message: 'Personal details saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});