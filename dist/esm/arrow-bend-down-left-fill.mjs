export const name="arrow-bend-down-left-fill";
export const id="dl_df247eb3d82145fb9506";
export const url=new URL("../icons/arrow-bend-down-left-fill.svg?v=bcff1fe70a0bad639013ed41a1201b8561a91391145bef4bd3479b462d0ca43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
