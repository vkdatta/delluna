export const name="nutrition-fill";
export const id="dl_3fb07eb5b90a762196a1";
export const url=new URL("../icons/nutrition-fill.svg?v=6097408d57a7df084bec218fcc987ea15eb375e5444bb16f2cc5fee151af9146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
