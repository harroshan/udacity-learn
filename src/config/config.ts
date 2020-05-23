export const config = {
  "dev": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "aws_key_id": process.env.AWS_KEY_ID,
    "aws_secret_key": process.env.AWS_SECRET_KEY,
    "jwt_secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "jwt_secret": process.env.JWT_SECRET,
    "aws_key_id": process.env.AWS_KEY_ID,
    "aws_secret_key": process.env.AWS_SECRET_KEY,
  }
}
