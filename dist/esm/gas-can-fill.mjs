export const name="gas-can-fill";
export const id="dl_58856f6be85943959581";
export const url=new URL("../icons/gas-can-fill.svg?v=637bcfa9298221a74628ce29ec6719eda75869e6dcf8b377ab27b1c18723c065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
