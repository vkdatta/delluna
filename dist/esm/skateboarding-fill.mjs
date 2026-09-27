export const name="skateboarding-fill";
export const id="dl_7d4885a4629c5dea899e";
export const url=new URL("../icons/skateboarding-fill.svg?v=dc3d15ed01de9bcfc977bd9440679b60704c6cca72e24cb0ff00fed8e28f8563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
