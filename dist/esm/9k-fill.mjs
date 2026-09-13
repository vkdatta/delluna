export const name="9k-fill";
export const id="dl_c43eda2768a84e148a95";
export const url=new URL("../icons/9/9k-fill.svg?v=03353e69dd4bd8a71db806f08924c5640e805c5e420432bb2602097ea50dfc54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
