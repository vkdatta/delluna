export const name="change_circle-fill";
export const id="dl_fa1784d2b8234a0db083";
export const url=new URL("../icons/C/change_circle-fill.svg?v=93d183ed180f9292f22ee873894a74803207738131863f4cb503eb31b09ba522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
