export const name="drop-half-bottom-fill";
export const id="dl_112796ef3f9e41f2a242";
export const url=new URL("../icons/drop-half-bottom-fill.svg?v=aefa67ade93698f335741bb2027ec1ef66027031216d55ec35d19b4ac0d2ca6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
