
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { config } from './config.js'
import User from './models/User.js'

async function run(){
  await mongoose.connect(config.mongoUri)
  const email = config.adminEmail
  const password = config.adminPassword
  const exists = await User.findOne({ email })
  if(!exists){
    const hash = await bcrypt.hash(password, 10)
    await User.create({ email, password:hash, role:'admin', approvalStatus:'approved', profile:{ name:'Super Admin' } })
    console.log('Admin created:', email, password)
  }else{
    console.log('Admin exists:', email)
  }
  process.exit(0)
}
run().catch(e=>{ console.error(e); process.exit(1) })
