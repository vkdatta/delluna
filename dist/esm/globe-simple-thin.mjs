export const name="globe-simple-thin";
export const id="dl_17e216efed624b639a22";
export const url=new URL("../icons/globe-simple-thin.svg?v=c5493a8408d4e592cd76bed400300d2c74bae66d7abe8b0528e58ddf3ed796ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
