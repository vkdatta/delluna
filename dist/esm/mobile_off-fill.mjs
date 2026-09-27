export const name="mobile_off-fill";
export const id="dl_e28cdd11941e20ed2e69";
export const url=new URL("../icons/mobile_off-fill.svg?v=03fd5958962fb0549dcd317ca9715021a2cbaa4b832747199550bc059f3d7601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
