export const name="cardiology-fill";
export const id="dl_9761fb19e8a50f087cbe";
export const url=new URL("../icons/cardiology-fill.svg?v=3173d8b6c2e83baf79451a1765105c39a716680da71b10842f591d141d22ec0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
