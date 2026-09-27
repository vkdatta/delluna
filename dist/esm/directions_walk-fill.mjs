export const name="directions_walk-fill";
export const id="dl_abc5521ff62e22fc77a0";
export const url=new URL("../icons/directions_walk-fill.svg?v=0795585316d6fa4e3c047bc4bf557c98fc396a995c90e39d84b3357faf3f576f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
