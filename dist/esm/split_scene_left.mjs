export const name="split_scene_left";
export const id="dl_1f33ede4dce9f60a56e3";
export const url=new URL("../icons/split_scene_left.svg?v=fb8d0b10c133cf5ea5e2f99d49c16be5b0f7f5c64ef223385a895860db8a413a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
