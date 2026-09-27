export const name="nest_farsight_seasonal-fill";
export const id="dl_c84df5f3dce4b69269a5";
export const url=new URL("../icons/nest_farsight_seasonal-fill.svg?v=8e4a4e6940ee5f3e1b2996d19da33ec6af2e4e9d44891c5e4dc38e323e6a6bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
