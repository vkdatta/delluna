export const name="graph-light";
export const id="dl_e0a9c9a563f549ffb1b3";
export const url=new URL("../icons/graph-light.svg?v=d9d0fd1216212f7b03a2c76410896e87ac74018bb98f8b440af29fbe590e39b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
