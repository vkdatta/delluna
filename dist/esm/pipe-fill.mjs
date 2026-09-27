export const name="pipe-fill";
export const id="dl_fc3359c44fa84983a0a5";
export const url=new URL("../icons/pipe-fill.svg?v=d27cdbae59094de73dbafb7d5a22905af0f2ea1aa716f182b414848523880ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
