export const name="timer_10_alt_1";
export const id="dl_547581b3c22f402c9b61";
export const url=new URL("../icons/T/timer_10_alt_1.svg?v=5d0cbe808f0a5b9046fb5c69a27f9e840fac939389c43917ff19bd5019c22248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
