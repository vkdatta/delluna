export const name="split_scene_down-fill";
export const id="dl_d51c9a75147d7dece38f";
export const url=new URL("../icons/split_scene_down-fill.svg?v=75bffb00b9f8f3ad3e2af2ff160610e2efe7013c83de8fa859ed98017d492947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
