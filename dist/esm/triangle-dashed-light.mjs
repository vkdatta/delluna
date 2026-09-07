export const name="triangle-dashed-light";
export const id="dl_e4542e2539624fcdb218";
export const url=new URL("../icons/T/triangle-dashed-light.svg?v=5a86e3142ae86cd1146d08ea5444e5e9342f864629630cac31219096028cd893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
