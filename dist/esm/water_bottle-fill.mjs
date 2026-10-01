export const name="water_bottle-fill";
export const id="dl_25def0094eabc1e1a57e";
export const url=new URL("../icons/water_bottle-fill.svg?v=71b0f18067f1e83d66a1248da103cdc6b5b84e1f28d7e61dd4910867a425fb38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
