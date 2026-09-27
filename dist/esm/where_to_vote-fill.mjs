export const name="where_to_vote-fill";
export const id="dl_9546a354795245b3fc72";
export const url=new URL("../icons/where_to_vote-fill.svg?v=4b43b7020d4ab9b19c82edc9c2c4459d6b762b611d915b403ea44eb7c822de03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
