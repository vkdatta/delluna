export const name="split_scene";
export const id="dl_be02727d0f6ac53c1862";
export const url=new URL("../icons/split_scene.svg?v=8d5b3d8bedc61761232f5b3b7662514e70f911c9e1105d7da35452002694946d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
