//imports
import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnection.js"; //destructure db variable

//configs

const app = express();
app.use(express.json());
app.use(cors());

//port set-up
const PORT = process.env.MY_PORT; //port number stored in .env
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

// root route

app.get("/", (req, res) => {
  res.json({ message: "This is the root route. Welcome!" });
});

// I want to READ data from the db
app.get("/jobs", async (req, res) => {
  //query db w/ error handling
  try {
    const data = await db.query(`SELECT * FROM jobs`);
    res.json(data.rows);
  } catch (error) {
    console.log("Oops, something went wrong.");
    res.status(500).json({ success: false });
  }
});

// I want to CREATE new data in my db

app.post("/addJob", (req, res) => {
  const body = req.body;
  //   destructured version of the body
  const {
    job_title,
    company_name,
    location,
    salary,
    job_description,
    link,
    date_applied,
    application_status,
  } = req.body;
  try {
    const insert = db.query(
      `INSERT INTO jobs (job_title,
  company_name,
  location,
  salary,
  job_description,
  link, 
  date_applied,
  application_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 )`,
      [
        job_title,
        company_name,
        location,
        salary,
        job_description,
        link,
        date_applied,
        application_status,
      ]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Oops, something went wrong.");
    res.status(500).json({ success: false });
  }
});
