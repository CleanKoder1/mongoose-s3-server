module.exports = {
  atlasConnection: process.env.MONGOATLAS_DB_URL,
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
  bucketName: process.env.BUCKET_NAME,
  bucketRegion: process.env.BUCKET_REGION,
  port: process.env.PORT || 8080,
};
