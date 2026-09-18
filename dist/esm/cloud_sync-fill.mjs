export const name="cloud_sync-fill";
export const id="dl_fb3d878c4626488b8d24";
export const url=new URL("../icons/cloud_sync-fill.svg?v=f112b3005b1ab0a2d4c24b2fc72ac1ddd978c50b3bc3f559d1a794b74713307b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
