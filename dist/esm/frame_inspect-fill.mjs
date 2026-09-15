export const name="frame_inspect-fill";
export const id="dl_0eb4dd2d70964db59603";
export const url=new URL("../icons/F/frame_inspect-fill.svg?v=ddf1509133d8e9290fa9d558334e3ea70645c48f4f2f764ef7364614199d94d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
