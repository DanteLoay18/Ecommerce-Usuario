"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221,748];
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

/***/ 1362:
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
;// CONCATENATED MODULE: ./models/Product.js

const ProductSchema = new external_mongoose_.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: (external_mongoose_default()).Types.ObjectId,
        ref: "Category"
    },
    properties: {
        type: Object
    },
    trending: {
        type: Number,
        required: true
    },
    rated: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true
    },
    offer: [
        {
            type: Object
        }
    ]
}, {
    timestamps: true
});
const Product = external_mongoose_.models.Product || (0,external_mongoose_.model)("Product", ProductSchema);

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(6029);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js + 1 modules
var _nextauth_ = __webpack_require__(8556);
;// CONCATENATED MODULE: ./pages/api/products.js



async function handle(req, res) {
    const { method  } = req;
    await (0,mongoose/* mongooseConnect */.I)();
    await (0,_nextauth_.isAdminRequest)(req, res);
    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Product.findOne({
                _id: req.query.id
            }));
        } else {
            res.json(await Product.find());
        }
    }
    if (method === "POST") {
        const { title , description , price , images , category , properties , stock , offer  } = req.body;
        const productDoc = await Product.create({
            title,
            description,
            price,
            images,
            category,
            properties,
            trending: 0,
            stock,
            offer
        });
        res.json(productDoc);
    }
    if (method === "PUT") {
        const { title , description , price , images , category , properties , stock , offer , _id  } = req.body;
        await Product.updateOne({
            _id
        }, {
            title,
            description,
            price,
            images,
            category,
            properties,
            stock,
            offer
        });
        res.json(true);
    }
    if (method === "DELETE") {
        if (req.query?.id) {
            await Product.deleteOne({
                _id: req.query?.id
            });
            res.json(true);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [556], () => (__webpack_exec__(1362)));
module.exports = __webpack_exports__;

})();