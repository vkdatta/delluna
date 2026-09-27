export const name="compass-tool-light";
export const id="dl_1fae5c2d59c347b69515";
export const url=new URL("../icons/compass-tool-light.svg?v=da1cd8886ba52f180ee67d4ab1d4049820cb73640b790fe6b9197bb153cd65a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
