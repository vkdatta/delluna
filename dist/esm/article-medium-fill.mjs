export const name="article-medium-fill";
export const id="dl_b04af60376bf4ea18fec";
export const url=new URL("../icons/article-medium-fill.svg?v=97f68e8781e318a8aa8105b29d4e050229732df3b0bea2ef18fdae232c1b01bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
