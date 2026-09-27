export const name="split_scene_right-fill";
export const id="dl_6174aaac451c63d75d71";
export const url=new URL("../icons/split_scene_right-fill.svg?v=445b39a266c593aa37eb1195642699a767b35b499160e1212ee3cce05801b6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
