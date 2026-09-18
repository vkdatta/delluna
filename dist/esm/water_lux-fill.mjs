export const name="water_lux-fill";
export const id="dl_e4523bc7ccb04c1384c0";
export const url=new URL("../icons/W/water_lux-fill.svg?v=062003fe263cdcd8780c359ed4b98fa418498f0b53363e8e570d881dc50970f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
