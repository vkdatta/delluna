export const name="filter_frames";
export const id="dl_a561e02b9b204cce9bf1";
export const url=new URL("../icons/filter_frames.svg?v=34c08d6a8586ce6b6608ef007990cd49f0da03691aa4e10e85f63b0a22ca4a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
