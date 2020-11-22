const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
  
// подключение
mongoose.connect("mongodb://root:example@localhost:27017/usersdb", { useNewUrlParser: true, useUnifiedTopology: true } );
  
const User = mongoose.model("User", userScheme);
const user = new User({
    name: "Bill",
    age: 41
});
  
user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных
     
    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});

