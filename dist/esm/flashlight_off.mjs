export const name="flashlight_off";
export const id="dl_4737805073a9edb42d35";
export const url=new URL("../icons/flashlight_off.svg?v=d389b79baa7d0fc9038080bbae7a317628fc4422d5e05a46f1f1a4ed66383c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
