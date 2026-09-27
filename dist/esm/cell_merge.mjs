export const name="cell_merge";
export const id="dl_04d85870675c398f7aab";
export const url=new URL("../icons/cell_merge.svg?v=3691fd41885298fb80f4f0e3e67c300c9f155e18c62e3b39fe90b3daa8cabd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
