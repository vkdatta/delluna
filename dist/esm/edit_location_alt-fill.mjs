export const name="edit_location_alt-fill";
export const id="dl_73642ff530f340ef86e3";
export const url=new URL("../icons/edit_location_alt-fill.svg?v=0368dc8bf501940ffd9e0ac5926c025abeacad0c34aa4b0cfbfcde1a60bebb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
