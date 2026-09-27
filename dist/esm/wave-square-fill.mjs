export const name="wave-square-fill";
export const id="dl_f85a9c05db2dc57a5245";
export const url=new URL("../icons/wave-square-fill.svg?v=d1e4c55632bf581675d429da8756160cbbe6618e7c3fe0dea2c053df93d6862e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
