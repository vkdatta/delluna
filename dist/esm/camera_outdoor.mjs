export const name="camera_outdoor";
export const id="dl_f3a6bcdee303daa1f8ca";
export const url=new URL("../icons/camera_outdoor.svg?v=dd8f0a6f49fe0cb448ce8434c7a663d70f22bb69a9307138b1c82c73f4f891a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
