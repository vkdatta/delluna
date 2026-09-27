export const name="finance_mode-fill";
export const id="dl_24f3a7f647209b2c3ad9";
export const url=new URL("../icons/finance_mode-fill.svg?v=eb5723cc6ccce9be95693be22351eb56f39877e6db5959a35cf2ac4de94b59fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
