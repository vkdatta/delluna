export const name="settings_ethernet-fill";
export const id="dl_c6cefd9311fab2817353";
export const url=new URL("../icons/settings_ethernet-fill.svg?v=2c64a1f131b14a5ff756e792110bcb4c78dbf34456ee7997793e5fe165873560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
