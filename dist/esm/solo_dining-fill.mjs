export const name="solo_dining-fill";
export const id="dl_fe808b399a8fe250fbec";
export const url=new URL("../icons/solo_dining-fill.svg?v=a03a37ad558b3532c214a31cecc094c220876ced9d51ec8cc4f7bd8717b67d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
