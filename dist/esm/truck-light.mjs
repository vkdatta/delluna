export const name="truck-light";
export const id="dl_ff7c4b3421b126d53541";
export const url=new URL("../icons/truck-light.svg?v=ec3df3e22995da29f15e698c5ecbff0f9bf92291225c02af800ce37b012bc94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
