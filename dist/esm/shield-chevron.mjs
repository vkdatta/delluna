export const name="shield-chevron";
export const id="dl_065332e240832eed579d";
export const url=new URL("../icons/shield-chevron.svg?v=0347e48babf874e12c6d95200c86b7dd396f8c123c0291c55f9a4893f2231490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
