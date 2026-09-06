export const name="currency-dollar-simple-light";
export const id="dl_46e1184511c044dcb171";
export const url=new URL("../icons/currency-dollar-simple-light.svg?v=5ee00ed5789005d739e91cdd61f7f029c71deac2e2ea35fc2ec751f32c30f2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
