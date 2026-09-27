export const name="timer_3_select-fill";
export const id="dl_75f14bc5aada22ef7946";
export const url=new URL("../icons/timer_3_select-fill.svg?v=3d34d82f1539af0958ce270c91b52f7bd2c5c655bbc4f56858019ade6613564d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
