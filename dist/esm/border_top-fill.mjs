export const name="border_top-fill";
export const id="dl_0e47d7f5a211d5cc321f";
export const url=new URL("../icons/border_top-fill.svg?v=43143e451023e290a9225e393ded023af83c62855ae31e2a69ad50057c73ca07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
