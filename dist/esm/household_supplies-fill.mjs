export const name="household_supplies-fill";
export const id="dl_17fa967f3b1ef79d6dfe";
export const url=new URL("../icons/household_supplies-fill.svg?v=8b6d49df39e8a1d0d70ce678f823aed15712700c7a0a0115017865a93dff7a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
