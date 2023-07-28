"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39,748];
exports.modules = {

/***/ 166:
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "multiparty"
const external_multiparty_namespaceObject = require("multiparty");
var external_multiparty_default = /*#__PURE__*/__webpack_require__.n(external_multiparty_namespaceObject);
;// CONCATENATED MODULE: external "@aws-sdk/client-s3"
const client_s3_namespaceObject = require("@aws-sdk/client-s3");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "mime-types"
const external_mime_types_namespaceObject = require("mime-types");
var external_mime_types_default = /*#__PURE__*/__webpack_require__.n(external_mime_types_namespaceObject);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(6029);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js + 1 modules
var _nextauth_ = __webpack_require__(8556);
;// CONCATENATED MODULE: ./pages/api/upload.js






const bucketName = "dante-ecommerce";
async function handle(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    await (0,_nextauth_.isAdminRequest)(req, res);
    const form = new (external_multiparty_default()).Form();
    const { fields , files  } = await new Promise((resolve, reject)=>{
        form.parse(req, (err, fields, files)=>{
            if (err) reject(err);
            resolve({
                fields,
                files
            });
        });
    });
    console.log("length:", files.file.length);
    const client = new client_s3_namespaceObject.S3Client({
        region: "us-east-1",
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
        }
    });
    const links = [];
    for (const file of files.file){
        const ext = file.originalFilename.split(".").pop();
        const newFilename = Date.now() + "." + ext;
        await client.send(new client_s3_namespaceObject.PutObjectCommand({
            Bucket: bucketName,
            Key: newFilename,
            Body: external_fs_default().readFileSync(file.path),
            ACL: "public-read",
            ContentType: external_mime_types_default().lookup(file.path)
        }));
        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
        links.push(link);
    }
    return res.json({
        links
    });
}
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [556], () => (__webpack_exec__(999)));
module.exports = __webpack_exports__;

})();