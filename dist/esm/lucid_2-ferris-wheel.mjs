export const name="lucid_2-ferris-wheel";
export const id="dl_2dccef17815e420980ba";
export const url=new URL("../icons/lucid_2-ferris-wheel.svg?v=3ac2f697657000cfa6751e0fff09e68124797599c0de9f081908c73f7e8fd4f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
