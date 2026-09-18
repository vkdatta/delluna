export const name="clock_loader_60-fill";
export const id="dl_1e771cbb8a98464f9880";
export const url=new URL("../icons/clock_loader_60-fill.svg?v=e8b2376573ec2f57283f2b4be87c96cd391f9e6fd955a93e7ff5cf40ab293e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
