export const name="settings-fill";
export const id="dl_da754c6737da4c18805a";
export const url=new URL("../icons/settings-fill.svg?v=5e6ab767fd6c90f97674a749f507a3c5f6849e108750a769a06d77df096a099f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
