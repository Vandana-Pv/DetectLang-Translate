const resolve = require('path').resolve;
const {Translate} = require('@google-cloud/translate').v2;

process.env.GOOGLE_APPLICATION_CREDENTIALS = resolve(
    './configs/serviceKey.json'
);

const translate = new Translate();

async function querytranslate(query,targetLang){
    // let text=query;
    let target = 'en'
    // return message;
    let [translations] = await translate.translate(query, targetLang);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${query[i]} => (${targetLang}) ${translation} `);
    });
    return translations[0];
}

// TRANSLATE AN ARRAY OF OBJECTS
async function arrayTranslate(userdata,targetLang){
    console.log('==data',userdata);
    // let text=userdata;
    // let target = 'te'
    // return message;
    let [translations] = await translate.translate(userdata, targetLang);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${userdata[i]} => (${targetLang}) ${translation} `);
    });
    console.log('final res===',translations);
    return translations;
}

module.exports = {
    querytranslate,
    arrayTranslate
}