export const name="reorder-fill";
export const id="dl_94037f95442649c0b6bc";
export const url=new URL("../icons/R/reorder-fill.svg?v=9ba98f9ef07351949e847e8083d40dad0308b7507ae7b436ff9f6e4ab1511ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
