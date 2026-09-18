export const name="glyphs-fill";
export const id="dl_2be4299ec9dc4f5b93af";
export const url=new URL("../icons/G/glyphs-fill.svg?v=07fde9d0d96fa96484675255873b2f2d34198ecf08818e905e7fe9724f96b602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
