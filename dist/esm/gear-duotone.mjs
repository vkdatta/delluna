export const name="gear-duotone";
export const id="dl_c756f081e6324669b219";
export const url=new URL("../icons/gear-duotone.svg?v=844f6e041e4622283f651e76882c784af0627f950a6a2536e923b12e4ae5e590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
