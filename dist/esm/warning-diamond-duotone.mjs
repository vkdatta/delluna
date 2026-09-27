export const name="warning-diamond-duotone";
export const id="dl_8d0fd510a51d89ce4dd2";
export const url=new URL("../icons/warning-diamond-duotone.svg?v=54901b456cf58ccb4e467c1d850060489cb276c5b5b92894f5a5bfe77059a997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
