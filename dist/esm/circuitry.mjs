export const name="circuitry";
export const id="dl_84f5fb9dfd9b44b790b1";
export const url=new URL("../icons/circuitry.svg?v=f3bf5ef60887fd20144784bbb7758db61ef9553a121fffdc8ce4ecb80fc58b74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
