export const name="window_open-fill";
export const id="dl_a7e0008d5f194af98af9";
export const url=new URL("../icons/W/window_open-fill.svg?v=c0edc60cc6a202fb35f37d3ce2709ab2d2cc98178e84967aec447b1f2cd14564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
