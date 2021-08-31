
const data=require("./dataclean.js");
function cleanDataBySymbol(symbol) {
    let cleanedData = [];
    data.forEach((ele) => {
        if (ele.symbol === symbol) cleanedData.push(ele);
    });
    return cleanedData;
}
module.exports=cleanDataBySymbol;