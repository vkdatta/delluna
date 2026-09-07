export const name="security-camera";
export const id="dl_a2e0c97f9a7945c4adeb";
export const url=new URL("../icons/S/security-camera.svg?v=830324fcf1d5a6e3d9c58174818b311a68768c9d174451f7d7841d6111e76d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
