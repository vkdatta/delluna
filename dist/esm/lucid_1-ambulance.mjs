export const name="lucid_1-ambulance";
export const id="dl_046589c0eecc413a9522";
export const url=new URL("../icons/lucid_1-ambulance.svg?v=e0364e655e7d9316a265938b72a488a192031d0a31f67f8fa84131ddcfad80e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
