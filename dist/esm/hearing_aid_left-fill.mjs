export const name="hearing_aid_left-fill";
export const id="dl_871f7eeeb8934a48a6ef";
export const url=new URL("../icons/H/hearing_aid_left-fill.svg?v=4c5dd0d8278fecb8e47c8d3d9eddf0ce80763859689fc2fd5fdbb697e96aecb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
