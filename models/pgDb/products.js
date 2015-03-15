var Product = function(db){
    this.db = db;
    this.Data = [];
}

Product.prototype.Data = {};
Product.prototype.Schema = {
    product_id: Number,
    name: String,
    description: String,
    status_id: Number,
    price: Number,
    img: String
};


Product.prototype.getAll = function(callback){

    var query = this.db.query("SELECT * FROM product");

    query.on("row", function (row, result) {
        result.addRow(row);
    });

    query.on("end", function (result) {
      finalData = result.rows;
        callback(finalData);
        // pgProduct.end();
        return;
    });
}
Product.prototype.insert = function(data){
    return true;
}
Product.prototype.update = function(id, key, value){
    return true;
}
Product.prototype.delete = function(id){
    return true;
}


module.exports = Product;

