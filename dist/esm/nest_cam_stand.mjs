export const name="nest_cam_stand";
export const id="dl_81cb4d8efdf9c16f66a2";
export const url=new URL("../icons/nest_cam_stand.svg?v=18b27ed5cf75537e6825fdeb4469d897b1c79c8a8f4f51f6b865c5c6964f1897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
