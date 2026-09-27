export const name="position_bottom_right-fill";
export const id="dl_cab31edd87009338780d";
export const url=new URL("../icons/position_bottom_right-fill.svg?v=52add9a9ef3a0dc24dd445bb7db0d799350b5412540d989629617aff10deafaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
