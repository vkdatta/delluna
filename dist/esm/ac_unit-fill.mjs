export const name="ac_unit-fill";
export const id="dl_d225f353f38e3cc949b7";
export const url=new URL("../icons/ac_unit-fill.svg?v=cf5db2442cf7f32d6ba5062bf2b0d9d36ad978d8ee78888eeac8bf9d348f7d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
