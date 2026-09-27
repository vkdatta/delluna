export const name="devices_other";
export const id="dl_2aeedf01582305c1eb48";
export const url=new URL("../icons/devices_other.svg?v=a7a2f5aa0c0d57a80c83541312236f1942cd09ebc36b6b1d7102d0469000efe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
