export const name="view_object_track";
export const id="dl_e1f596ff246765393693";
export const url=new URL("../icons/V/view_object_track.svg?v=b2295f936c827ea99ca0cd419b91fbf20cb76bf3813e9d8e519b21febc5dd778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
