export const name="open_in_new-fill";
export const id="dl_ac813c56790488bfbb55";
export const url=new URL("../icons/open_in_new-fill.svg?v=b2b7d81645581e064468c0b744a3026796090a14aaddcc9b4bf9f1d27856990e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
