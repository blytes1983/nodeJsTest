// Data source: LinkedIn
const data = [
    {'company': 'Microsoft' , 'size': 91259, 'revenue': 60420, 'value': 50000 },
    {'company': 'IBM' , 'size': 400000, 'revenue': 98787, 'value': 50000 },
    {'company': 'Skype' , 'size': 700, 'revenue': 716, 'value': 50000 },
    {'company': 'SAP' , 'size': 48000, 'revenue': 11567, 'value': 50000 },
    {'company': 'Yahoo!' , 'size': 14000 , 'revenue': 6426, 'value': 50000 },
    {'company': 'eBay' , 'size': 15000, 'revenue': 8700, 'value': 50000 },
  ];
   
  // Create the data 2D-array (vectors) describing the data
  let vectors = new Array();
  for (let i = 0 ; i < data.length ; i++) {
    vectors[i] = [ data[i]['size'] , data[i]['revenue'], data[i]['value']];
  }
   
  const kmeans = require('node-kmeans');
  kmeans.clusterize(vectors, {k: 2}, (err,res) => {

    /*if (err) console.log(err);

    else console.log('%o',res);*/

});


const vectorize = require('./consts');

var vector = new Array();
vector = vectorize.vectorize("hola manola manola hola manola");
console.log( vector );
