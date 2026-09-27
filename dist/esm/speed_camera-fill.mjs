export const name="speed_camera-fill";
export const id="dl_4d8956429d3b70660ce4";
export const url=new URL("../icons/speed_camera-fill.svg?v=23b1cf24bb5b40e0d36ffec284afef5b62ac9def1a453285a23f24e55ab38c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
