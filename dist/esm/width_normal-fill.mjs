export const name="width_normal-fill";
export const id="dl_46a9a8faf01adb35e35d";
export const url=new URL("../icons/width_normal-fill.svg?v=ba5fe6a39f5efbdfdd3c2cedbaa16d3e9772967cb41ad3fb9078ed6c926bcebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
