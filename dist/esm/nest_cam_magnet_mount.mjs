export const name="nest_cam_magnet_mount";
export const id="dl_dc7b9167cb2f51c1decb";
export const url=new URL("../icons/nest_cam_magnet_mount.svg?v=43851796c706042811e28fc1dd9780f5a1a777938164890232e2c47d94163622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
