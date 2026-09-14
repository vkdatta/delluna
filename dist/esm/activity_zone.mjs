export const name="activity_zone";
export const id="dl_fe8780d2dd30405283d8";
export const url=new URL("../icons/A/activity_zone.svg?v=7c600fdaf393cf55148fffdc316fb50da7eee57bf1ce9f4a34d02ce9b4c7a302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
