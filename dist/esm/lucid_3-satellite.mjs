export const name="lucid_3-satellite";
export const id="dl_345a0f5d1c774463bd00";
export const url=new URL("../icons/lucid_3-satellite.svg?v=afddc22ec3453c41074d8c44f779143474bc74b88e1a11cda3bb7a5282021d8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
