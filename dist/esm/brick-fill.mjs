export const name="brick-fill";
export const id="dl_277d18d5eadd559a0f34";
export const url=new URL("../icons/brick-fill.svg?v=19391a1690ebe456fcda1a8dea5e95b508a50383aeab4deadc06868308e2cdc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
