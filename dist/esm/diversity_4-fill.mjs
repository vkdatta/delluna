export const name="diversity_4-fill";
export const id="dl_be62902f86a4182bfc65";
export const url=new URL("../icons/diversity_4-fill.svg?v=75686f4bff1337edda0308da15acc07b72b682935addea23e04b9109c2565835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
