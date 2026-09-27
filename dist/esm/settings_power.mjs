export const name="settings_power";
export const id="dl_8ff79704cb2f789a8f55";
export const url=new URL("../icons/settings_power.svg?v=b8321afa2c4011ff2c0a803c8fdd98ca7c9cf224868a60badb50d80283523e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
