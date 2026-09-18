export const name="headset_off-fill";
export const id="dl_0ef445f0e89740859dea";
export const url=new URL("../icons/headset_off-fill.svg?v=ab9a2e563f7fa0f223c99ecfe3a498ba5a2f890c85785b31f67d820fddec9daa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
