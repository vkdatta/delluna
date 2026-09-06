export const name="lucid_1-cloudy";
export const id="dl_39dec73da1f24f36bd1c";
export const url=new URL("../icons/lucid_1-cloudy.svg?v=8c5324bcd4022245192fe04c1529b9aadc600d8ab02117ccf236d8249dece488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
