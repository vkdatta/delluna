export const name="wifi_tethering_off";
export const id="dl_b07c4a7236914270b06b";
export const url=new URL("../icons/W/wifi_tethering_off.svg?v=ae8c9167c864f1b5c4e42b78f81d6deb4b2069c0e660855be9c4df458e6c54ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
