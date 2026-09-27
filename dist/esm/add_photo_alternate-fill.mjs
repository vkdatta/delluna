export const name="add_photo_alternate-fill";
export const id="dl_3d063ad028e9309ff70d";
export const url=new URL("../icons/add_photo_alternate-fill.svg?v=920dd0bb89d90d45aaa298daa12c6818f2dc270eae78b7ccf253c0389afbe496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
