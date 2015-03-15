var Client = function(db){
    this.db = db;
    this.Data = [];
}

Client.prototype.Data = {};
Client.prototype.Schema = {
    client_id: Number,
    first_name: String,
    last_name: String,
    status_id: Number,
    login: String,
    password: String
};


Client.prototype.getAll = function(callback){

    var query = this.db.query("SELECT * FROM client");

    query.on("row", function (row, result) {
        result.addRow(row);
    });

    query.on("end", function (result) {
      finalData = result.rows;
        callback(finalData);
        // pgClient.end();
        return;
    });
}
Client.prototype.insert = function(data){

  // var query = this.db.query("INSERT INTO client(
  //               first_name,
  //               last_name,
  //               login,
  //               password) VALUES($1, $2, $3, $4)",
  //   [ data.first_name, 
  //     data.last_name,
  //     data.login,
  //     data.password]);
    return true;
}
Client.prototype.update = function(id, key, value){
  var sql = "UPDATE client SET "+key+" = "+value+" WHERE client_id = "+id+"";
  console.log(sql);
  // var query = this.db.query(sql);
    return true;
}
Client.prototype.delete = function(id){

  var query = this.db.query("DELETE FROM client WHERE client_id = "+id);
    return true;
}


module.exports = Client;

