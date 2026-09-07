export const name="toggle-right-duotone";
export const id="dl_b088eb743c0d42b48b5d";
export const url=new URL("../icons/T/toggle-right-duotone.svg?v=95a67f96561d6478cedd416bd3352d54e450a10a481c8747317dea3efad318f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
