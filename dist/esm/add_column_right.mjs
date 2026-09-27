export const name="add_column_right";
export const id="dl_ce0090f828755cd4eb1d";
export const url=new URL("../icons/add_column_right.svg?v=a7bd72ce55dc9c9365a0e5d30c79da1b74fdcefae19b245fdcb2da2ee5709ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
