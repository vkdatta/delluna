export const name="wifi_tethering-fill";
export const id="dl_f0b81297c6abb420a074";
export const url=new URL("../icons/wifi_tethering-fill.svg?v=66a6c64c6dbd4179978da5e65e5bbe8f75cb77e0b876d0c25f4472e2a4297360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
