export const name="turn_right-fill";
export const id="dl_ee8cdef7bd2457a931c6";
export const url=new URL("../icons/turn_right-fill.svg?v=5178877c2075d364882e77e3893c95f74a5d63488331b96182d3901241100dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
