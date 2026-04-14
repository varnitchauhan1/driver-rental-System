
import dotenv from 'dotenv'
dotenv.config()
export const config = {
  mongoUri: process.env.MONGO_URI || 'mongodb+srv://abhisheksengar4321:Shivabhiyassi@cluster0.qnvnqep.mongodb.net/test',
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
  port: process.env.PORT || 5000,
  adminEmail: process.env.ADMIN_EMAIL || 'admin@example.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'Admin@123'
}
