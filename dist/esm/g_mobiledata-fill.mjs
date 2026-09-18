export const name="g_mobiledata-fill";
export const id="dl_2cd4789210014d008714";
export const url=new URL("../icons/g_mobiledata-fill.svg?v=6a39bdf6f93e68ffe43f6fd6b7aa5cb507e32ec39d2aae835ad80bc1c46e15a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
