export const name="image-square-thin";
export const id="dl_bb1ea9ea1fa244ab85be";
export const url=new URL("../icons/image-square-thin.svg?v=86dbb8c5ac659c0ee40455c3bd051c105493872fef7387a3101ebf6a58e84e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
