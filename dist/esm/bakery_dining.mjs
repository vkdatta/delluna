export const name="bakery_dining";
export const id="dl_5202322c4cca4fc4aa68";
export const url=new URL("../icons/B/bakery_dining.svg?v=00aecf8cfc435202873b2cf4323a5288a1f3d65ca542c39fc11e1cc7598c3f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
