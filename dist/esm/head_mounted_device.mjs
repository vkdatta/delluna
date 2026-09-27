export const name="head_mounted_device";
export const id="dl_d5c7270c0cdb1989cc03";
export const url=new URL("../icons/head_mounted_device.svg?v=647dfd313174f668f12816ac0d2840e9618018b06fce044dd1dcad6e0f37dade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
