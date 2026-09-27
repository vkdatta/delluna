export const name="wifi-high-duotone";
export const id="dl_8ad54da3eb09f49d6e5a";
export const url=new URL("../icons/wifi-high-duotone.svg?v=757423cc9c6cf653f44d9774d7ff732a86c793ff5ba7039c7db2355441db462e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
