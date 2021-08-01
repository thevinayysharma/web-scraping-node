/* scraping jamesqquick.com talks */

const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.jamesqquick.com/talks").then((res) => {

    const $ = cheerio.load(res.data);

    const talks = [];

    //loop till end of talks
    $('.card').each(function(i,elem) {
        talks[i] = $(this).attr('href');
    });
      
    printResponse(talks); 

});

function printResponse(arr) {
    console.log();
    console.log("Executing your results. Please Wait.......");
    
    for(let i = 0 ; i < arr.length ; i++ ) {
        console.log(i, arr[i]);
    }
};


//similarly courses/streams can be scrpaed using appropriate cheerio attributes.