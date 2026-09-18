export const name="library_add_check";
export const id="dl_a5f23b990e114834b0e9";
export const url=new URL("../icons/library_add_check.svg?v=805a35ef9bc6daf2611b0f831db25824da914c2d2c1b982dc2233977df1b86f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
