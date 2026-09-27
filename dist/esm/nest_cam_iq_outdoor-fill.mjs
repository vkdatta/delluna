export const name="nest_cam_iq_outdoor-fill";
export const id="dl_586f721fe2f8e825e8bb";
export const url=new URL("../icons/nest_cam_iq_outdoor-fill.svg?v=414d8352fa6111ac2630c7322b75222922e72eb3b83605964f40c02bd1e5d4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
