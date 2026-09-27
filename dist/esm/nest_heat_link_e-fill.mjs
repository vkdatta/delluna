export const name="nest_heat_link_e-fill";
export const id="dl_a65fbc34fadc66766215";
export const url=new URL("../icons/nest_heat_link_e-fill.svg?v=e58227fc37a0ce06fe826d02b1e7c77e07a1d7f3e9edb9f2d40a293760198731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
