export const name="flip_camera_ios-fill";
export const id="dl_097be69d167a78be55b4";
export const url=new URL("../icons/flip_camera_ios-fill.svg?v=4e6cb99d37a65de7a2aaf03106c5d498d0e447fee81f5ec57228f3650d601cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
