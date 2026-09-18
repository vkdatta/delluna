export const name="mobile_camera_front-fill";
export const id="dl_d25303377b6b4d4b953a";
export const url=new URL("../icons/M/mobile_camera_front-fill.svg?v=2701d3435fdf0c344fa9822e78f1d1cd49216c0e79ce4c723c2762a54a8b7a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
