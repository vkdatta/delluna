export const name="directions_boat";
export const id="dl_2885a8909f5e0f01e14f";
export const url=new URL("../icons/directions_boat.svg?v=3eb9d1dc406a4666d67ed9cf7fa974203dcce56cebec61bd24af411da2281ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
