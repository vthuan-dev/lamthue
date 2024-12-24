const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  'bxrz7bfjvkkcertvcbae', // database name
  'u5gu3ekme9kr6gr0', // username
  'KUUlnJFWD1b2TgSNCLlQ', // password
  {
    host: 'bxrz7bfjvkkcertvcbae-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
      connectTimeout: 60000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Đã kết nối thành công đến cơ sở dữ liệu:", {
      database: sequelize.config.database,
      host: sequelize.config.host,
      port: sequelize.config.port
    });
  } catch (error) {
    console.error("Chi tiết lỗi kết nối:", {
      thongBao: error.message,
      maLoi: error.code,
      stack: error.stack
    });
    throw error;
  }
};

module.exports = connectDatabase;
