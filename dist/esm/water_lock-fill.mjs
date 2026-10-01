export const name="water_lock-fill";
export const id="dl_82a84c352acb72fb2b75";
export const url=new URL("../icons/water_lock-fill.svg?v=42bb3e834e3268c2767460465f193e2796cc64f3b8ebdce09546c1d444935669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
