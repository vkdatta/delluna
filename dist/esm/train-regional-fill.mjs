export const name="train-regional-fill";
export const id="dl_e527e24d18990175826e";
export const url=new URL("../icons/train-regional-fill.svg?v=1cbddb03083b3a62828321db8dd856d71a2bc3ee241b1200f51354eed257cf6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
