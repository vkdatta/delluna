export const name="perm_media-fill";
export const id="dl_37644c48acb76c30b37e";
export const url=new URL("../icons/perm_media-fill.svg?v=eda8a8962a7740cd70b67172f9ee9c16dc9a4f6eaaac96e1e787147ce827a0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
