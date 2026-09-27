export const name="timer_5-fill";
export const id="dl_dcaa1c497b9d3f948130";
export const url=new URL("../icons/timer_5-fill.svg?v=076c0d30963e27534bb6e876e7b32b53bc90d360dd1e40d4fa214f2ea82309c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
