export const name="front_loader";
export const id="dl_330d3b77a298c87adf78";
export const url=new URL("../icons/front_loader.svg?v=13e62c02e0deef80cc68bd6693e820574f792e3763327b2c0a726e911e20554b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
