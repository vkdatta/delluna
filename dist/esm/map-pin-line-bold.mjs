export const name="map-pin-line-bold";
export const id="dl_787b4977ccc84d9e8621";
export const url=new URL("../icons/map-pin-line-bold.svg?v=91446858737a20b4d8542e75629ade360e731ef1415ba5d23f3cc451b8d3b894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
