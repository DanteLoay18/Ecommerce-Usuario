import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
  trending: {type:Number, required:true},
  rated: {type:Number, default:0},
  stock : {type:Number, required:true},
  offer: [{type:Object}]
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);