export const name="speaker-low-duotone";
export const id="dl_16474e0ebf579c1c7ed3";
export const url=new URL("../icons/speaker-low-duotone.svg?v=2d7005d123526d1182323516f3e5bae518037718f64797e532d73ed1e495a278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
