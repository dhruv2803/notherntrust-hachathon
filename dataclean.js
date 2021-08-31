const data = require("./Stock List.json");

function printData(data) {
    console.log(data);
}
let cleanedData = [];
function cleanData(data) {
   
    data.forEach((ele) => {
        cleanEle = {};
        cleanEle.symbol = ele.symbol;
        cleanEle.open = ele.open;
        cleanEle.high = ele.high;
        cleanEle.low = ele.low;
        cleanEle.close = ele.close;
        cleanEle.volume = ele.volume;
        cleanEle.date = ele.date;
        cleanedData.push(cleanEle);
    });
  
}
module.exports=cleanedData;
 




// printData(cleanDataByDateRange(cleanData(data), "2021-05-12", "2021-05-12"));
