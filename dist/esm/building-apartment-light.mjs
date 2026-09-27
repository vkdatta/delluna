export const name="building-apartment-light";
export const id="dl_312908bf01e749fb8138";
export const url=new URL("../icons/building-apartment-light.svg?v=447f32408fe422a596fee6b82963a0523524905ca91d4184ed6ef65b956b0e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
