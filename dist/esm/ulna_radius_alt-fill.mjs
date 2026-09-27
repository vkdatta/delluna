export const name="ulna_radius_alt-fill";
export const id="dl_64c2305b469d58be049e";
export const url=new URL("../icons/ulna_radius_alt-fill.svg?v=85b0b1f9a10c16132604b62cceb400d28ebcc75364f4d43e3b64c275d1af17d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
