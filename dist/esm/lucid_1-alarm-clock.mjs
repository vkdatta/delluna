export const name="lucid_1-alarm-clock";
export const id="dl_bd12dec1395a4d5db67d";
export const url=new URL("../icons/lucid_1-alarm-clock.svg?v=63859a61e8e5e4182a4c7a4d7ea06d9d1f85ffbbccbdeb75a24c3c5d5bce47c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
