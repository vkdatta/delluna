export const name="house_with_shield";
export const id="dl_5422372fd9af41eeaedf";
export const url=new URL("../icons/house_with_shield.svg?v=635a958e664a35f77def2d8fed68c2bbe183c3373de7dc9c62587ccbbc9552ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
