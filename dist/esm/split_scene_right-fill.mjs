export const name="split_scene_right-fill";
export const id="dl_b853cc03c73659fb6c1b";
export const url=new URL("../icons/split_scene_right-fill.svg?v=5144ba934f281816b85ec76fe7423034b09b5d7b58b528cd636ea2a65db7be96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
