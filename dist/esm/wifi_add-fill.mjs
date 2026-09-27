export const name="wifi_add-fill";
export const id="dl_1941deb08281db78db32";
export const url=new URL("../icons/wifi_add-fill.svg?v=7e7d54630eeb893fe85d5ce49236a6dfd2b1e6409c2a04ef62a1bda396f7b181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
