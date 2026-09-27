export const name="frame_inspect-fill";
export const id="dl_9043dd7b028e00c1a83b";
export const url=new URL("../icons/frame_inspect-fill.svg?v=067e1de5648ef4fd934ccbeab39fdab4cec3b8e8edc990dcdf4893e36145182c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
