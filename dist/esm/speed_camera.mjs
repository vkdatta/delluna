export const name="speed_camera";
export const id="dl_0675935207e26d7d5ebb";
export const url=new URL("../icons/speed_camera.svg?v=a3d2a6cec804cb0e83354060fd2df0f323bc0966cfbdfc8a119de17c35d76152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
