export const name="directions_off-fill";
export const id="dl_f85769cef6b485393e2f";
export const url=new URL("../icons/directions_off-fill.svg?v=dad1de2aac1ef696d34a3c546adfb12ea5d9ab7ee64620ce3ddd77a54a3d36bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
