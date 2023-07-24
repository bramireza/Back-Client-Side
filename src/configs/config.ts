import dotenv from "dotenv";

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "8000",
  FRONT_URL: process.env.FRONT_URL || "http://localhost:3000/",
  BACK_ACCOUNT_URL: process.env.BACK_ACCOUNT_URL as string,
};
