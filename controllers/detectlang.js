const resolve = require('path').resolve;
const {Translate} = require('@google-cloud/translate').v2;

process.env.GOOGLE_APPLICATION_CREDENTIALS = resolve(
    './configs/serviceKey.json'
);

const translate = new Translate();

async function detectlang(query){
    // హాయ్, మీరు ఎలా ఉన్నారు?
    // let text = query;
    let [detections] = await translate.detect(query);
    detections = Array.isArray(detections) ? detections : [detections];
    console.log('Detections:');
    detections.forEach(detection => {
      console.log(`${detection.input} => ${detection.language}`);
    });
    return detections; 
}

module.exports = {
    detectlang: detectlang
}