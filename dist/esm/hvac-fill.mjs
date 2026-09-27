export const name="hvac-fill";
export const id="dl_bfc359960d49018166e4";
export const url=new URL("../icons/hvac-fill.svg?v=2ac80e8761aaadd1d9709c1de5af7aec49f359807d9dc3a36f5574aa4d3d74ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
