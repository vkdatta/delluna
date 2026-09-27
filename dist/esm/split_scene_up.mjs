export const name="split_scene_up";
export const id="dl_579735ab804febe6cc9d";
export const url=new URL("../icons/split_scene_up.svg?v=0bc32418efa26ed6f085d54dd1dd80fe6313382160365128d43d3a21be8c4aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
