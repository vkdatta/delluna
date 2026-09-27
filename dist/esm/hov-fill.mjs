export const name="hov-fill";
export const id="dl_eb58e8544379e6338733";
export const url=new URL("../icons/hov-fill.svg?v=d821d3df6dde28f5b5a65b949c75b186004cbed3058aa49bc960067f83d8c1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
