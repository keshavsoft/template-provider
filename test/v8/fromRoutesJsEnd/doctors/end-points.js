import express from 'express';

const tableName = "doctors.json";
const tablePath = "Data/doctors.json";
const configPath = "Config/Schemas/doctors.json";

const router = express.Router();

export { router };