const express=require('express');
const bodyParser=require('body-parser');
const methodoverride=require('method-override')
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const morgan=require('morgan');
const multer=require('multer');
const helmet=require('helmet');
const path=require('path');
const fileURLToPath=require('url');
// Middleware or Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));   //for cross origin resouce sharing
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(methodoverride("_method"));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
// File Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });
// MongoDB and Mongoose Setup
const PORT=process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

