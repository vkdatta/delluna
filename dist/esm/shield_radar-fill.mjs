export const name="shield_radar-fill";
export const id="dl_7cd4c8359b3f49aeb7dd";
export const url=new URL("../icons/S/shield_radar-fill.svg?v=bca037f89513cdabdc6967bff8ff6cff2dcfdbb6411ee5d74efa4af9dd501538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
