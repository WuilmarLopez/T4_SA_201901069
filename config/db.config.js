module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "authdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
