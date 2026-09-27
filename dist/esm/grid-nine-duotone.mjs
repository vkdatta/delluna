export const name="grid-nine-duotone";
export const id="dl_1498d8b8a1b14e3e86a6";
export const url=new URL("../icons/grid-nine-duotone.svg?v=d94dad957ddb6b3dfd9a3a0c9787dbd622f701a8526b449b9c642e421a87a238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
