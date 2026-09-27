export const name="vignette_2-fill";
export const id="dl_c0a26f11f5049997d77f";
export const url=new URL("../icons/vignette_2-fill.svg?v=52ee120a734605f6f022ea57fd4e4de255d08560e2ec60dbc9861d430111bd3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
