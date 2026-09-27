export const name="garage_door_open-fill";
export const id="dl_fa62e500d16de43282b4";
export const url=new URL("../icons/garage_door_open-fill.svg?v=fff157ed22f9dc216346ff7bdddf5f5582e2634dde249603a346d1278106214e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
