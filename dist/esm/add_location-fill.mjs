export const name="add_location-fill";
export const id="dl_3c3d4c0f9b274799bb95";
export const url=new URL("../icons/A/add_location-fill.svg?v=0abc74af913b4121e8ecf74bfd9e90b2c5a37359881b2ff8f1b6b8136f19396e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
