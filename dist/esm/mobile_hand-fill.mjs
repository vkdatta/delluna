export const name="mobile_hand-fill";
export const id="dl_f8c03c1ab03f43068911";
export const url=new URL("../icons/mobile_hand-fill.svg?v=6dd5421b4661c285381a097548f7429b0281719f5271a2c1b81e251d24ba0968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
