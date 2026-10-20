export const name="ferris-wheel";
export const id="dl_2dccef17815e420980ba";
export const url=new URL("../icons/ferris-wheel.svg?v=125978f02e6742b2d353812d45da2e85a08ec9ae2855119c0e9fa0bf04a2cb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
