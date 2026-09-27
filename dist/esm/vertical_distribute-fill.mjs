export const name="vertical_distribute-fill";
export const id="dl_4eb44558d2e1075458e8";
export const url=new URL("../icons/vertical_distribute-fill.svg?v=db3e45c17bf81d0c3add07e48de781518be67547fa6ca9dfe3c6168f18cce62f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
