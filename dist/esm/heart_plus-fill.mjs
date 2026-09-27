export const name="heart_plus-fill";
export const id="dl_e67de1cdf0e0db54c2a0";
export const url=new URL("../icons/heart_plus-fill.svg?v=32a662ac7a279d765bd85cfb0b13c9c2836b044921761b9428b03883d14ce1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
