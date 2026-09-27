export const name="globe_asia-fill";
export const id="dl_3cd71f14006dc2b7681b";
export const url=new URL("../icons/globe_asia-fill.svg?v=7081be716b47497b3108b1476035750c7d0c951ebb3f55d0224c9a138a39b594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
