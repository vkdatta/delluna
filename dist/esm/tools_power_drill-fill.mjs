export const name="tools_power_drill-fill";
export const id="dl_80b7d244b0a0245635ea";
export const url=new URL("../icons/tools_power_drill-fill.svg?v=f14ad3eb39fe959bc029ad3e04a6a40736f342e8ea25967d0b4446536336fd37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
