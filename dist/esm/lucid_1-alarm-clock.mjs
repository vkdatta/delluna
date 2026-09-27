export const name="lucid_1-alarm-clock";
export const id="dl_bd12dec1395a4d5db67d";
export const url=new URL("../icons/lucid_1-alarm-clock.svg?v=925dcfa6b636a773a72af08d2d6ea1344a6648eed47636be9d138f831eb62b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
