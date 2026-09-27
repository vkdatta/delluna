export const name="nest_cam_outdoor";
export const id="dl_e1e15910a856b1adf614";
export const url=new URL("../icons/nest_cam_outdoor.svg?v=e302f4365f084ea13fc2bb892e47905044413a08af094f2dfb4ed3690b613f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
