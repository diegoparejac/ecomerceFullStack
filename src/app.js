const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const indexRouter = require('./routes/index')
const marcasRouter = require('./routes/marcasRoutes')
const usuariosRouter = require('./routes/usuariosRoutes')



app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public" )));

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));  

app.use('/', indexRouter)
app.use(marcasRouter)
app.use(usuariosRouter)



