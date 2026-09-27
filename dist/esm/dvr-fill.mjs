export const name="dvr-fill";
export const id="dl_9a37bc8ac11b2a5f916c";
export const url=new URL("../icons/dvr-fill.svg?v=0a7d3db60e74b23c00ca936d986ef4224d1bed9b4f3a99e8920be60a1670a8ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
