export const name="backlight_high_off-fill";
export const id="dl_a8a84f782046aa047a8e";
export const url=new URL("../icons/backlight_high_off-fill.svg?v=1836fcf303a527a23151c1ccde6e8236b3aa91adf118f8a02ac004fe821ab7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
