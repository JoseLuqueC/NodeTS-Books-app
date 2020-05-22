"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const method_override_1 = __importDefault(require("method-override"));
// Routes
const routes_1 = __importDefault(require("./routes"));
const books_1 = __importDefault(require("./routes/books"));
// Initializations
const app = express_1.default();
require('./database');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(method_override_1.default());
// Routes
app.use(routes_1.default);
app.use('/books', books_1.default);
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});
