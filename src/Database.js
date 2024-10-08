const fs = require('fs');
const path = require('path');
const { app } = require('electron')

var hto = false;
var whto = "";

// Create AppData folder
const appDataPath = path.join(app.getPath('appData'), 'FNF Launcher')

function dbDeleteAll() {
    //a
}

function jsonSafeStringify(obj) {
    try {
        return JSON.stringify(obj);
    }
    catch (e) {
        hto = true;
        whto = e;
        return "";
    }
}

function jsonSafeParse(obj) {
    try {
        return JSON.parse(obj);
    }
    catch (e) {
        hto = true;
        whto = e;
        return {};
    }
}

if (!fs.existsSync(appDataPath)) {
    fs.mkdirSync(appDataPath, { recursive: true });
}

// Create database if not existing
if (!fs.existsSync(path.join(appDataPath, 'dbfile.json'))) {
    fs.writeFileSync(path.join(appDataPath, 'dbfile.json'),jsonSafeStringify({"version": "1"}));
}

async function dbWriteValue(key, value) {
    var db = jsonSafeParse(fs.readFileSync(path.join(appDataPath, 'dbfile.json'), 'utf8'));
    db[key] = value;
    fs.writeFileSync(path.join(appDataPath, 'dbfile.json'), jsonSafeStringify(db));
}

function dbReadValue(key) {
    var db = jsonSafeParse(fs.readFileSync(path.join(appDataPath, 'dbfile.json'), 'utf8'));
    return db[key];
}

function dbGetAllEngines() {
    var db = jsonSafeParse(fs.readFileSync(path.join(appDataPath, 'dbfile.json'), 'utf8'));
    var engines = [];
    for (var key in db) {
        if (key.startsWith('engine') && key.startsWith('engineSrc') == false) {
            try {
                fs.readdirSync(path.join(db[key]));
                engines.push(key);
            }
            catch (e) {
                // Delete engine from database if it does not exist anymore
                console.log('Engine ' + key + ' does not exist anymore. Deleting from database.');
                dbDeleteValue(key);
            }
        }
    }
    return engines;
}

function dbDeleteValue(key) {
    var db = jsonSafeParse(fs.readFileSync(path.join(appDataPath, 'dbfile.json'), 'utf8'));
    delete db[key];
    fs.writeFileSync(path.join(appDataPath, 'dbfile.json'), jsonSafeStringify(db));
}

try {
    if (dbReadValue('engineSrc') == null || dbReadValue('engineSrc') == undefined) {
        dbWriteValue('engineSrc', 'ffm-backend.web.app');
    }
}
catch (e) {
    hto = true;
    whto = "Corrupted dbfile.json";
}

module.exports = {
    dbWriteValue: dbWriteValue,
    dbReadValue: dbReadValue,
    dbGetAllEngines: dbGetAllEngines,
    dbDeleteValue: dbDeleteValue,
    dbDeleteAll: dbDeleteAll,
    appDataPath: appDataPath,
    hto: hto,
    whto: whto
};