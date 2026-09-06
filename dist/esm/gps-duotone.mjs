export const name="gps-duotone";
export const id="dl_2182054751b24f41be4f";
export const url=new URL("../icons/gps-duotone.svg?v=781f18fc77a2ca906589d96623238d3f0ec17b7b750ba1082b74945b0e07b23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
