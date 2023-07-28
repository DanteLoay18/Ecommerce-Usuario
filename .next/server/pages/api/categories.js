"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957,748];
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

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Category.js

const CategorySchema = new external_mongoose_.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: (external_mongoose_default()).Types.ObjectId,
        ref: "Category"
    },
    properties: [
        {
            type: Object
        }
    ]
});
const Category = external_mongoose_.models?.Category || (0,external_mongoose_.model)("Category", CategorySchema);

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(6029);
// EXTERNAL MODULE: external "next-auth"
var external_next_auth_ = __webpack_require__(3227);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js + 1 modules
var _nextauth_ = __webpack_require__(8556);
;// CONCATENATED MODULE: ./pages/api/categories.js




async function handle(req, res) {
    const { method  } = req;
    await (0,mongoose/* mongooseConnect */.I)();
    await (0,_nextauth_.isAdminRequest)(req, res);
    if (method === "GET") {
        res.json(await Category.find().populate("parent"));
    }
    if (method === "POST") {
        const { name , parentCategory , properties  } = req.body;
        const categoryDoc = await Category.create({
            name,
            parent: parentCategory || undefined,
            properties
        });
        res.json(categoryDoc);
    }
    if (method === "PUT") {
        const { name , parentCategory , properties , _id  } = req.body;
        const categoryDoc = await Category.updateOne({
            _id
        }, {
            name,
            parent: parentCategory || undefined,
            properties
        });
        res.json(categoryDoc);
    }
    if (method === "DELETE") {
        const { _id  } = req.query;
        await Category.deleteOne({
            _id
        });
        res.json("ok");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [556], () => (__webpack_exec__(6154)));
module.exports = __webpack_exports__;

})();