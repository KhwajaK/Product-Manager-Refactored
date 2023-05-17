const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"],
        maxlength: [55, "Title can not exceed 55 characters"]
    },
    price: { type: Number,
        required: [true, "Price is required"],
        minlength: [2, "Price must be at least 2 characters"],
        maxlength: [6, "Price can not exceed 6 characters"]
    },
    description:{ type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters"],
        maxlength: [255, "Description can not exceed 255 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)