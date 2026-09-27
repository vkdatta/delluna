export const name="cooking-fill";
export const id="dl_ecd235ac9ed4b9d81e0b";
export const url=new URL("../icons/cooking-fill.svg?v=9d81b0bc0feeb9d1df5b27643322c0064d10779daee1f49c654b06891f258355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
