export const name="split_scene_right-fill";
export const id="dl_8258f0b37caf88c1e70a";
export const url=new URL("../icons/split_scene_right-fill.svg?v=0de884bcb9efd71d89e701ac89873e085d4c531beb806f222524fe4a7e87c611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
