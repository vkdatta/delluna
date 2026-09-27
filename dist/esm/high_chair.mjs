export const name="high_chair";
export const id="dl_c7b83b4f8442c7832db0";
export const url=new URL("../icons/high_chair.svg?v=77bb9d3e87a34ebd58e2c61e1cdcd20ccb3062700b4c348f6eb70946785e401e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
