export const name="battery_android_shield-fill";
export const id="dl_6ef7f18ea434ca94694c";
export const url=new URL("../icons/battery_android_shield-fill.svg?v=f1818e4bfbf36976744b09fa73271425b9add4d629d399c21db947e4e2954b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
