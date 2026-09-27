export const name="nest_cam_floodlight";
export const id="dl_4dd23498cf23bf9932d4";
export const url=new URL("../icons/nest_cam_floodlight.svg?v=c1ffc6a4ae59867f1bbff5fbd1e7855716bc7d125698ff2b1995d035633b5999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
