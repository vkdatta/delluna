export const name="battery-vertical-medium-duotone";
export const id="dl_6a71f977403e4a658451";
export const url=new URL("../icons/battery-vertical-medium-duotone.svg?v=09e98f843eefbdd0a032a4f78ba5ce3132a1ec97e92a211f1ed7424238e50edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
