export const name="format_shapes";
export const id="dl_a605924c8de5339356fb";
export const url=new URL("../icons/format_shapes.svg?v=e0d97c30e3253cd5d17694a403b151e1a82bdfedda6cd95f6818772ec2175de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
