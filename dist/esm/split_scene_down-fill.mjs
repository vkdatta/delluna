export const name="split_scene_down-fill";
export const id="dl_c237cf8b1259dc933aa9";
export const url=new URL("../icons/split_scene_down-fill.svg?v=b7893f3b07f83723082c1b5562b905238abbed003f5f6a5eaa373f13ab2491a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
