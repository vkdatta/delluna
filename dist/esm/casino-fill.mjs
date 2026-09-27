export const name="casino-fill";
export const id="dl_5e8a7071fc5aa0ec9461";
export const url=new URL("../icons/casino-fill.svg?v=fb842f49d2b768442606e2a0acbe414bbbc33ba8e35bde5aa118fa2cd6b43c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
