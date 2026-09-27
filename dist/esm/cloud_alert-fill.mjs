export const name="cloud_alert-fill";
export const id="dl_e203e71b76285ae9cb40";
export const url=new URL("../icons/cloud_alert-fill.svg?v=e81a95d89ffa27528600e3d68c0cc54d8d9b69e01ee39d15f1e508c103788ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
