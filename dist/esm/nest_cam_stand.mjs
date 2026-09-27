export const name="nest_cam_stand";
export const id="dl_115111dd9e4a8262ac9c";
export const url=new URL("../icons/nest_cam_stand.svg?v=7546af117b23a0f09f898485861cd8994a15062f9a3ed1c462218308d45c0d03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
