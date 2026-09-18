export const name="speed_camera";
export const id="dl_db6fd0a95d7d4f4da817";
export const url=new URL("../icons/S/speed_camera.svg?v=f739baaf7bf8d86929b77151203465c519e58d8a2c4b179d2dadbec5e4db094e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
