export const name="mode_fan_off-fill";
export const id="dl_3e2b39f1561eb3e17143";
export const url=new URL("../icons/mode_fan_off-fill.svg?v=bca18a8f70c613001063ce16cbc7af74677bc4ad16ea236bf4c568c554364be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
