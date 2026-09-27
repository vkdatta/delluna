export const name="motion_photos_paused-fill";
export const id="dl_d1fe4c0d6691cf3cae6d";
export const url=new URL("../icons/motion_photos_paused-fill.svg?v=6789664039b061800901a2aa1c92deea2d475b192fc7a644d6b63156c3f92247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
