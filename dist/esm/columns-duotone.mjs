export const name="columns-duotone";
export const id="dl_d5c97f9f11ec443184f8";
export const url=new URL("../icons/columns-duotone.svg?v=6137d4b8bbe752bc5e3ff7e435283a67eb3d6d21c0d7e9cfd1fddad74698a02b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
