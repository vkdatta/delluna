export const name="climate_mini_split";
export const id="dl_d44d9dc894db4ce48efc";
export const url=new URL("../icons/C/climate_mini_split.svg?v=e1ec8e10045bbac13d60a46fddd5c2c4bfc48d348d138560314b0b1ede768307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
