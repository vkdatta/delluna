export const name="user-circle-fill";
export const id="dl_bb6abb7019a34b2c2d51";
export const url=new URL("../icons/user-circle-fill.svg?v=2f922d2f0e852791c25f22223769aa2d83b6ada6da81c5af0372a67870c2d1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
