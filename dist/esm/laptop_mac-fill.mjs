export const name="laptop_mac-fill";
export const id="dl_16d097c1d2eb4703a2e7";
export const url=new URL("../icons/L/laptop_mac-fill.svg?v=ab2bc54f46b70362999fbdb89c653bee6753f383cb25f8596c43ac4cb4869345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
