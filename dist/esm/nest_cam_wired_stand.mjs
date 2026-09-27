export const name="nest_cam_wired_stand";
export const id="dl_822830b26574edbda1e3";
export const url=new URL("../icons/nest_cam_wired_stand.svg?v=b482af3c3bfaf3c03dbaa96caf35ef60531fb07c3b100a54e253fe704e0f7541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
