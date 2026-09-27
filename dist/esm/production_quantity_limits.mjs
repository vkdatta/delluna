export const name="production_quantity_limits";
export const id="dl_d1291ea02d580c4c6ddc";
export const url=new URL("../icons/production_quantity_limits.svg?v=e044fc2401f6e740fd1c5acdf9d2aa020500ea7693eac0acdbb9cce9b8fd37e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
