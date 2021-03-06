const data = require("./Stock List.json");

function printData(data) {
    console.log(data);
}

function cleanData(data) {
    let cleanedData = [];
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
    return cleanedData;
}

function cleanDataBySymbol(data, symbol) {
    let cleanedData = [];
    data.forEach((ele) => {
        if (ele.symbol === symbol) cleanedData.push(ele);
    });
    return cleanedData;
}

function cleanDataByDateRange(data, initialDate, finalDate) {
    let cleanedData = [];
    data.forEach((ele) => {
        if (ele.date >= initialDate && ele.date <= finalDate)
            cleanedData.push(ele);
    });
    return cleanedData;
}

// printData(cleanDataByDateRange(cleanData(data), "2021-05-12", "2021-05-12"));
