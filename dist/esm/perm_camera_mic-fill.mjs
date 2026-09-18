export const name="perm_camera_mic-fill";
export const id="dl_8f7b0e813c6f413dba9f";
export const url=new URL("../icons/P/perm_camera_mic-fill.svg?v=4267a4b1d00574f2cd09d790cab5e006f5dd28b6855170032bef898b5ba68396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
