import mongoose from 'mongoose';
const user = process.env.DBUSER;
const password = process.env.DBPASSWD;
const dbName =
  process.env.NODE_ENV === 'test' ? process.env.TESTDBNAME : process.env.DBNAME;
console.log('Connecting to', dbName);
const uri = `mongodb+srv://${user}:${password}@cluster0.dj9ya.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const MONGODB_URI = uri;
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;
