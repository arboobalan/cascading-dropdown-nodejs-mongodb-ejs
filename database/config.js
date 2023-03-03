const mongoose = require('mongoose');

mongoose.connect(process.env.URL,  {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then((req,res) => {
    console.log("MongoDB connected");
}).catch(() => {
    console.log('MongoDB not connected');
})