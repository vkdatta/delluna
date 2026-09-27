export const name="local_drink";
export const id="dl_a73f44b96fb2d3d047ae";
export const url=new URL("../icons/local_drink.svg?v=b69f3048407e13be9bb96fcdbb70183e298268a1413d8b442e232796c43b29e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
