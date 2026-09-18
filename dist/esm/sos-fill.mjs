export const name="sos-fill";
export const id="dl_d2b84dbf9adb4a669e07";
export const url=new URL("../icons/sos-fill.svg?v=31fa32042fe3d38df08ccbb3276def636824e18b4e5829a9d6d0b67498e2ea7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
