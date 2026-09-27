export const name="perm_camera_mic-fill";
export const id="dl_87f7793bcb05732e310d";
export const url=new URL("../icons/perm_camera_mic-fill.svg?v=9ead37c7a868ac3170de7a1e52f0a2114e7d9841b332de25fe9bb8d35f4005e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
