export const name="number-circle-zero-light";
export const id="dl_b37fbac0b12749d8ad80";
export const url=new URL("../icons/number-circle-zero-light.svg?v=cf1dbcac7d83c5c40f096845e412c41b79557eb75944b6de18006e89097c43df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
