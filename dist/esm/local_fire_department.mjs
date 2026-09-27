export const name="local_fire_department";
export const id="dl_b1f6ce01c281a56fbad6";
export const url=new URL("../icons/local_fire_department.svg?v=a526f3bb48c5e0e01f1cb555ada82f3bb0f51328e091681409330c05548d923d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
