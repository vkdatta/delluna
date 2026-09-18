export const name="speed_camera-fill";
export const id="dl_acebdf84d8a34a949847";
export const url=new URL("../icons/S/speed_camera-fill.svg?v=e74ab730d386ee4876945cbd1fab898f2af656458dde89a5c3dbe9db45849c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
