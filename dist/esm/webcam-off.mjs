export const name="webcam-off";
export const id="dl_f20a02e01c2948da8c26";
export const url=new URL("../icons/webcam-off.svg?v=1bae71b3d48980310126156d09724836e7a3fe3c94cf7c4850f38ac82454d2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
