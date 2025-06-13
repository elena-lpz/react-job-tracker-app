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

app.post("/addJob", async (req, res) => {
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
    const insert = await db.query(
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

// I want to DELETE data from db

app.delete("/deleteJob/:id", async (req, res) => {
  const jobId = req.params.id;
  try {
    console.log(jobId);
    const deleteJob = await db.query(`DELETE FROM jobs WHERE id = $1`, [jobId]);
    if (!jobId) {
      console.log("ID doesn't exist");
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Oops, something went wrong.");
    res.status(500).json({ success: false });
  }
});

// I want to UPDATE data in my db
// Setting this up now though I might not use it as it's not part of my MVP

app.put("/updateJob/:id", (req, res) => {
  const jobBody = req.body; // for the updated job data
  const jobId = req.params.id; // to target the correct job
  try {
    const updateJob = db.query(
      `UPDATE jobs SET job_title = $1,
        company_name = $2,
        location = $3,
        salary = $4,
        job_description = $5,
        link = $6,
        date_applied = $7,
        application_status = $8 WHERE id = $9`,
      [
        jobBody.job_title,
        jobBody.company_name,
        jobBody.location,
        jobBody.salary,
        jobBody.job_description,
        jobBody.link,
        jobBody.date_applied,
        jobBody.application_status,
        jobId,
      ]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Oops, something went wrong.");
    res.status(500).json({ success: false });
  }
});
