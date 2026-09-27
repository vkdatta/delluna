export const name="done_outline-fill";
export const id="dl_e5415189e6ed5d9789e7";
export const url=new URL("../icons/done_outline-fill.svg?v=7fcb0f6f2ff1f3a19ecb73a38073cf669d78325e922262159d4db9fd21269068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
