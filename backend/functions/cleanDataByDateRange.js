const data=require("./dataclean.js");
function cleanDataByDateRange(data, initialDate, finalDate) {
    let cleanedData = [];
    data.forEach((ele) => {
        if (ele.date >= initialDate && ele.date <= finalDate)
            cleanedData.push(ele);
    });
    return cleanedData;
}
module.exports=cleanDataByDateRang;