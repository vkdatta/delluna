export const name="clock-counter-clockwise-fill";
export const id="dl_ef8977602d9144cc8d2e";
export const url=new URL("../icons/clock-counter-clockwise-fill.svg?v=02fc25f6f4970cf3063c358943815a14490eb5766010fcf829136b8977f2a1df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
