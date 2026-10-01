export const name="transition_slide";
export const id="dl_dd2d23a63e4f26e5809f";
export const url=new URL("../icons/transition_slide.svg?v=3ffbccdcd7ef13c34d7cb951593aa751dcaea142de9e06cb4cb4016a3dea8647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
