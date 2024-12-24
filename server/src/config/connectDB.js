const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  'phong_tro', // database name
  'root', // username
  'CmcxpBTQwDhHRCnCiJiiUIQegmnxcUJU', // password
  {
    host: 'autorack.proxy.rlwy.net',
    dialect: 'mysql',
    port: 34147,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
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

export default connectDatabase;
