export const name="file-ts-light";
export const id="dl_62360c9f907d40dfaef7";
export const url=new URL("../icons/file-ts-light.svg?v=b83706ae7fa9b510953addf5790be91feda57e101d6591c9ddfb881384f6a694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
