export const name="headset-thin";
export const id="dl_e18a1b26455f49088643";
export const url=new URL("../icons/headset-thin.svg?v=578a456cc8b45143150894927652ce287fd29462822436c443cc5fa1077f850f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
