export const name="nearby-fill";
export const id="dl_6543793eec94460da8fb";
export const url=new URL("../icons/nearby-fill.svg?v=d9b53244660c0f721b571bfb73700c8a36533b25144fc6b81e20958091dc9bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
