export const name="speed_0_75";
export const id="dl_df127c788e6dd170a64d";
export const url=new URL("../icons/speed_0_75.svg?v=2a389071fdb8c2b3276f624d26e7d04041401c049a64670e4620e081725eb980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
