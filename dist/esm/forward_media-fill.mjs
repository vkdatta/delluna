export const name="forward_media-fill";
export const id="dl_c06d796dcac0461e864a";
export const url=new URL("../icons/F/forward_media-fill.svg?v=b440810205e3c24fd3d29be81304b2dd1d33a4705b45e24bf4a3c9b5cac6c6d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
