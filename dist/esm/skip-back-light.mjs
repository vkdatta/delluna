export const name="skip-back-light";
export const id="dl_63b09b604ae332e0de09";
export const url=new URL("../icons/skip-back-light.svg?v=886148b4f85f179af1ef4777e4818e72628d660dc42a085d3b761c1cf2304757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
