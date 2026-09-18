export const name="nest_cam_wall_mount-fill";
export const id="dl_38dd5f261cb24a51ae0a";
export const url=new URL("../icons/nest_cam_wall_mount-fill.svg?v=9835cb21b60631f4f46a345fd93937af7954c75db4918b27f179aae0ee46eeac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
