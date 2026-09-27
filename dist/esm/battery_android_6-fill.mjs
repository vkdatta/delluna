export const name="battery_android_6-fill";
export const id="dl_4af31f18f4a817c67101";
export const url=new URL("../icons/battery_android_6-fill.svg?v=37e7c6a69df3469448aeeb3d82b1d7a2607b22d1988f116e3783d3009baf44bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
