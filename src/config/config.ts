export const config = {
  "dev": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  // "dev": {
  //   "username": "hariproject",
  //   "password": "hari2504",
  //   "database": "udagramhari",
  //   "host": "hariproject.caoisjepsdp7.ap-south-1.rds.amazonaws.com",
  //   "dialect": "postgres",
  //   "aws_region": "ap-south-1",
  //   "aws_profile": "default",
  //   "aws_media_bucket": "udagramhari"
  // },
  "prod": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres"
  }
}
