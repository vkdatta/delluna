export const name="lucid_2-corner-right-up";
export const id="dl_435112906d81472690de";
export const url=new URL("../icons/lucid_2-corner-right-up.svg?v=64248ce207f1e82cbbbeb017db79823f3f51046545051b757c513c4dc8c16089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
