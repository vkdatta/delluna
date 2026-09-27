export const name="align-center-horizontal-duotone";
export const id="dl_343dd757691b4a0a8508";
export const url=new URL("../icons/align-center-horizontal-duotone.svg?v=3c079fafdc2f9576589461073e23909ff28f1331fd30588b39d246c0e1678233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
