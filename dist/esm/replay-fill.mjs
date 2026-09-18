export const name="replay-fill";
export const id="dl_f0fe2258687e450ca677";
export const url=new URL("../icons/replay-fill.svg?v=5bc98f3c2616ecc6c3787b6df0bf2a7e7a6a69c48706016a6454d1e8fc4ef929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
