export const name="nest_cam_outdoor";
export const id="dl_a6efa63e4ee2c6e77e0f";
export const url=new URL("../icons/nest_cam_outdoor.svg?v=b520bd79e0f60d407d520686a4427846b62951237838c1659ce53077d1da80eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
