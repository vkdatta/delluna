export const name="pool-fill";
export const id="dl_b2d40455503183ef6dcd";
export const url=new URL("../icons/pool-fill.svg?v=47260b9dd750e32c76eafee6bb09034552d95c31252a034a080fc72930a821ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
