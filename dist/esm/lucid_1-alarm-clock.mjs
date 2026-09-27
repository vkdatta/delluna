export const name="lucid_1-alarm-clock";
export const id="dl_bd12dec1395a4d5db67d";
export const url=new URL("../icons/lucid_1-alarm-clock.svg?v=5c1fb4d9a33cf9b163f8773dde93b34112d9803bb121ebf924ebfcd184fce059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
